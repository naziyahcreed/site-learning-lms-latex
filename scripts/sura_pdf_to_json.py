#!/usr/bin/env python3
"""
Sura Guide PDF to Structured JSON Converter.

Extracts text, chapters, questions, answers, and Sura Guide marking rubrics
from 10th Standard Sura Guide PDFs using pypdf, and converts each subject
into an individual structured JSON file.
"""

import json
import re
import sys
from pathlib import Path

# Insert backend venv if pypdf is installed there
VENV_PACKAGES = Path("/home/hp/Videos/school/school/vidhya-shakthi/backend/venv/lib/python3.12/site-packages")
if VENV_PACKAGES.exists():
    sys.path.insert(0, str(VENV_PACKAGES))

try:
    from pypdf import PdfReader
except ImportError:
    import pypdf
    from pypdf import PdfReader

PDF_DIR = Path("/home/hp/Videos/school/school/site-learning-lms-latex/data/sura_guides_pdf")
JSON_OUTPUT_DIR = Path("/home/hp/Videos/school/school/site-learning-lms-latex/data/json_guides")
JSON_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def parse_page_text_into_sections(full_text: str, subject_key: str) -> list[dict]:
    """
    Parses the extracted text of a subject into structured chapters/units,
    questions, answers, and mark schemes.
    """
    lines = [line.strip() for line in full_text.splitlines() if line.strip()]
    
    chapters = []
    current_chapter = None
    current_q = None
    current_category = "General"

    for line in lines:
        # Ignore page separators or banners
        if line.startswith("--- Page") or line.startswith("===") or "STATE BOARD" in line or "SURA GUIDE FULL" in line or "SURA GUIDE COMPLETE" in line:
            continue

        # 1. Detect Chapter / Unit header
        unit_match = re.search(r'^(UNIT\s+\d+|IYAL\s+\d+|HISTORY UNIT|GEOGRAPHY UNIT|CIVICS UNIT|ECONOMICS UNIT)[\s:]*(.*)', line, re.IGNORECASE)
        if unit_match and not line.startswith("Q") and not line.startswith("Ans:"):
            if current_chapter:
                if current_q:
                    current_chapter["questions"].append(current_q)
                    current_q = None
                chapters.append(current_chapter)
            
            unit_title = line
            current_chapter = {
                "unit_id": f"unit_{len(chapters) + 1}",
                "title": unit_title,
                "questions": []
            }
            continue

        # 2. Detect Category / Section Heading (e.g. ### 1 Mark Objective Questions)
        if line.startswith("###"):
            if "1 Mark" in line:
                current_category = "1 Mark Objective / MCQ"
            elif "2 Mark" in line:
                current_category = "2 Marks Short Answer"
            elif "4 Mark" in line:
                current_category = "4 Marks Long Answer"
            elif "5 Mark" in line:
                current_category = "5 Marks Detailed / Paragraph"
            elif "7 Mark" in line:
                current_category = "7 Marks Comprehensive"
            else:
                current_category = line.replace("###", "").strip()
            continue

        # 3. Detect Question line (Q1:, Q2:, etc.)
        q_match = re.match(r'^(Q\d+)[:\.]?\s*(.*)', line)
        if q_match:
            if current_q and current_chapter:
                current_chapter["questions"].append(current_q)
            
            # Deduce marks from category
            marks = 1 if "1 Mark" in current_category else 2 if "2 Mark" in current_category else 4 if "4 Mark" in current_category else 5 if "5 Mark" in current_category else 7 if "7 Mark" in current_category else 2
            
            current_q = {
                "question_id": q_match.group(1),
                "question_text": q_match.group(2) if q_match.group(2) else line,
                "category": current_category,
                "marks": marks,
                "answer_text": "",
                "steps": [],
                "rubric_mark": f"{marks} Marks"
            }
            continue

        # 4. Detect Step / Rubric line (Step 1:, Step 2:, etc.)
        step_match = re.match(r'^(Step\s*\d+)[:\.]?\s*(.*)', line)
        if step_match and current_q:
            step_content = step_match.group(2)
            mark_alloc = re.search(r'\[(.*?)\]', line)
            step_mark = mark_alloc.group(1) if mark_alloc else "1 Mark"
            clean_content = re.sub(r'\[.*?\]', '', step_content).strip()
            current_q["steps"].append({
                "step": step_match.group(1),
                "content": clean_content,
                "mark_allocated": step_mark
            })
            continue

        # 5. Detect Answer line (Ans:)
        ans_match = re.match(r'^Ans[:\.]?\s*(.*)', line)
        if ans_match and current_q:
            ans_content = ans_match.group(1)
            mark_alloc = re.search(r'\[(.*?)\]', ans_content)
            if mark_alloc:
                current_q["rubric_mark"] = mark_alloc.group(1)
            current_q["answer_text"] = re.sub(r'\[.*?\]', '', ans_content).strip()
            continue

        # 6. Additional continuation lines of question answer
        if current_q:
            if line.startswith("Outline:") or line.startswith("Paragraph Outline:"):
                current_q["answer_outline"] = line
            elif not current_q["steps"]:
                if current_q["answer_text"]:
                    current_q["answer_text"] += " " + line.strip()
                else:
                    current_q["answer_text"] = line.strip()

    if current_q and current_chapter:
        current_chapter["questions"].append(current_q)
    if current_chapter:
        chapters.append(current_chapter)

    return chapters


def process_pdf_to_json(pdf_path: Path) -> Path:
    """Read a Sura Guide PDF, extract pages, parse to structured JSON, and save."""
    print(f"\nProcessing PDF: {pdf_path.name}")
    reader = PdfReader(str(pdf_path))
    num_pages = len(reader.pages)

    full_text = ""
    pages_extracted = []

    for i, page in enumerate(reader.pages, 1):
        text = page.extract_text() or ""
        pages_extracted.append({
            "page_number": i,
            "char_count": len(text),
            "text": text
        })
        full_text += f"\n--- Page {i} ---\n" + text

    stem = pdf_path.stem
    if "Tamil" in stem:
        subject_name = "Tamil (தமிழ்)"
        subject_code = "tam_10"
        medium = "Tamil Medium"
    elif "English" in stem:
        subject_name = "English"
        subject_code = "eng_10"
        medium = "English Medium"
    elif "Social" in stem:
        subject_name = "Social Science (சமூக அறிவியல்)"
        subject_code = "soc_10"
        medium = "English / Tamil Medium"
    elif "Science" in stem:
        subject_name = "Science (அறிவியல்)"
        subject_code = "sci_10"
        medium = "English / Tamil Medium"
    else:
        subject_name = stem
        subject_code = stem.lower()
        medium = "Standard"

    chapters_data = parse_page_text_into_sections(full_text, subject_code)
    total_q = sum(len(c["questions"]) for c in chapters_data)

    structured_json = {
        "metadata": {
            "source_pdf": pdf_path.name,
            "subject": subject_name,
            "subject_code": subject_code,
            "standard": "10th Standard (SSLC)",
            "curriculum": "Tamil Nadu State Board - Samacheer Kalvi",
            "medium": medium,
            "guide_publisher": "Sura Publications (சுரா கையேடு)",
            "evaluation_scheme": "Sura Guide Centum Evaluation Rubric",
            "total_pages": num_pages,
            "total_chapters": len(chapters_data),
            "total_questions": total_q
        },
        "chapters": chapters_data,
        "raw_pages": pages_extracted
    }

    out_json_path = JSON_OUTPUT_DIR / f"{stem}.json"
    with open(out_json_path, "w", encoding="utf-8") as f:
        json.dump(structured_json, f, indent=2, ensure_ascii=False)

    print(f"  Successfully converted to: {out_json_path}")
    print(f"  Extracted: {len(chapters_data)} Chapters, {total_q} Questions with Answers & Rubrics.")
    return out_json_path


def main():
    print("=" * 70)
    print("SURA GUIDE PDF TO STRUCTURED JSON CONVERTER")
    print(f"Source PDF Directory: {PDF_DIR}")
    print(f"Destination JSON Directory: {JSON_OUTPUT_DIR}")
    print("=" * 70)

    pdf_files = sorted(list(PDF_DIR.glob("*.pdf")))
    if not pdf_files:
        print(f"Error: No PDF files found in {PDF_DIR}")
        sys.exit(1)

    generated_files = []
    for pdf_file in pdf_files:
        out_file = process_pdf_to_json(pdf_file)
        generated_files.append(out_file)

    print("\n" + "=" * 70)
    print(f"COMPLETED: Successfully generated {len(generated_files)} separate JSON files:")
    for gf in generated_files:
        size_kb = gf.stat().st_size / 1024
        print(f" - {gf.name} ({size_kb:.2f} KB)")
    print("=" * 70)


if __name__ == "__main__":
    main()
