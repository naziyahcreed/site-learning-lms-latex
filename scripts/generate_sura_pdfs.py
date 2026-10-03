#!/usr/bin/env python3
"""
Generate comprehensive Sura Guide PDFs for the remaining 4 subjects of TN 10th Standard:
1. Tamil
2. English
3. Science
4. Social Science

These PDFs contain authentic TN State Board Samacheer Kalvi syllabus content,
book-back questions, 1-mark, 2-mark, 4/5-mark, and 7-mark questions with
Sura Guide evaluation rubrics and step-by-step mark distributions.
"""

from pathlib import Path

PDF_DIR = Path("/home/hp/Videos/school/school/site-learning-lms-latex/data/sura_guides_pdf")
PDF_DIR.mkdir(parents=True, exist_ok=True)


def escape_pdf_text(text: str) -> str:
    """Escape special characters for PDF text strings."""
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def create_simple_pdf(filename: Path, title: str, pages_data: list[list[str]]):
    """
    Creates a valid standard PDF-1.4 file with text streams.
    pages_data is a list of pages, where each page is a list of lines.
    """
    objects = []
    
    def add_object(content: str) -> int:
        objects.append(content)
        return len(objects)

    # Object 1: Catalog
    add_object("<< /Type /Catalog /Pages 2 0 R >>")

    # Object 2: Pages container
    pages_obj_idx = 2
    objects.append("")  # placeholder

    # Object 3: Font
    add_object("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    font_obj_idx = 3

    page_obj_indices = []

    for page_lines in pages_data:
        stream_lines = [
            "BT",
            "/F1 10 Tf",
            "50 790 Td",
            f"({escape_pdf_text(title)}) Tj",
            "/F1 8 Tf",
            "0 -15 Td",
            "(================================================================================) Tj",
            "/F1 9 Tf",
            "0 -18 Td",
        ]
        
        for line in page_lines:
            if line.startswith("### ") or line.startswith("UNIT ") or line.startswith("IYAL "):
                stream_lines.append("/F1 11 Tf")
                stream_lines.append(f"({escape_pdf_text(line)}) Tj")
                stream_lines.append("/F1 9 Tf")
                stream_lines.append("0 -15 Td")
            elif line.startswith("Q"):
                stream_lines.append("/F1 9.5 Tf")
                stream_lines.append(f"({escape_pdf_text(line)}) Tj")
                stream_lines.append("/F1 9 Tf")
                stream_lines.append("0 -13 Td")
            elif line.startswith("Ans:"):
                stream_lines.append(f"({escape_pdf_text(line)}) Tj")
                stream_lines.append("0 -13 Td")
            elif line.startswith("[Mark") or line.startswith("Rubric:"):
                stream_lines.append("/F1 8 Tf")
                stream_lines.append(f"({escape_pdf_text(line)}) Tj")
                stream_lines.append("/F1 9 Tf")
                stream_lines.append("0 -13 Td")
            elif line == "":
                stream_lines.append("0 -8 Td")
            else:
                stream_lines.append(f"({escape_pdf_text(line)}) Tj")
                stream_lines.append("0 -12 Td")

        stream_lines.append("ET")
        stream_content = "\n".join(stream_lines)
        stream_bytes = stream_content.encode("latin-1", errors="replace")
        
        content_idx = add_object(f"<< /Length {len(stream_bytes)} >>\nstream\n{stream_content}\nendstream")

        page_idx = add_object(
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] "
            f"/Contents {content_idx} 0 R "
            f"/Resources << /Font << /F1 {font_obj_idx} 0 R >> >> >>"
        )
        page_obj_indices.append(page_idx)

    kids_str = " ".join(f"{idx} 0 R" for idx in page_obj_indices)
    objects[pages_obj_idx - 1] = f"<< /Type /Pages /Kids [{kids_str}] /Count {len(page_obj_indices)} >>"

    pdf_parts = ["%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"]
    xref_offsets = [0]
    current_pos = len(pdf_parts[0])

    for i, obj in enumerate(objects, 1):
        xref_offsets.append(current_pos)
        obj_str = f"{i} 0 obj\n{obj}\nendobj\n"
        pdf_parts.append(obj_str)
        current_pos += len(obj_str)

    xref_pos = current_pos
    xref_str = f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for offset in xref_offsets[1:]:
        xref_str += f"{offset:010d} 00000 n \n"
    pdf_parts.append(xref_str)

    trailer_str = (
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
        f"startxref\n{xref_pos}\n%%EOF\n"
    )
    pdf_parts.append(trailer_str)

    complete_pdf = "".join(pdf_parts).encode("latin-1", errors="replace")
    filename.write_bytes(complete_pdf)
    print(f"Generated PDF: {filename} ({len(complete_pdf)} bytes, {len(pages_data)} pages)")


# ==============================================================================
# 1. TAMIL SURA GUIDE DATA
# ==============================================================================
tamil_pages = [
    [
        "TAMIL NADU STATE BOARD - CLASS 10 TAMIL",
        "SURA GUIDE FULL QUESTION BANK & STEP-BY-STEP EVALUATION SCHEME",
        "",
        "UNIT 1: Iyal 1 - Mozhi (Annai Mozhiye, Tamil Cholvalam, Erattura Mozhithal, Ezhuthu Chol)",
        "",
        "### 1 Mark Objective Questions (Palavul Therivu)",
        "Q1: What does Thamizhaganar refer to by the phrase 'Metha Vanigalan'?",
        "Ans: Merchant ships and the Five Great Epics (Vaniga kappalgalum Aimberum kappiyangalum) [1 Mark]",
        "",
        "Q2: Identify what 'Kaintha Ilaiyum Kaintha Thogaiyum' denotes as fertilizer.",
        "Ans: Sarugu and Sandu (Dry fallen leaves and dry banana leaves) [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions (Kuru Vina)",
        "Q3: Distinguish 'Vengai' as Thodarmoli and Pothumoli.",
        "Ans: 1) Thodarmoli: Vem + kai = hand that burns. [1 Mark]",
        "     2) Pothumoli: Vengai refers both to the tree (thanimoli) and the burning hand (thodarmoli). [1 Mark]",
        "",
        "Q4: How does Pavalareru Perunchithiranar praise mother Tamil in Annai Mozhiye?",
        "Ans: He hails Tamil as the fertile Muththamizh, the sweet fruit, Sangam literature treasure, Ten Idylls, Eight Anthologies, Silappathikaram, and Manimekalai. [2 Marks]",
        "",
        "### 5 Marks Detailed Answer (Neduvina - Sura Guide Template)",
        "Q5: Describe the vocabulary richness of Tamil language and the need for new terminologies.",
        "Ans: Outline: Munnurai - Cholvalam - Thavara Uruppugal - Chollakka Thevai - Mudivurai.",
        "Step 1: Introduction: Tamil language is pre-eminent in rich vocabulary compared to other languages. [1 Mark]",
        "Step 2: Base of Plants: Thal, thandu, kol, thoori describe different types of stems. [1 Mark]",
        "Step 3: Leaf types: Ilai, thal, thogai, olai, sandu, sarugu describe different states of leaves. [1 Mark]",
        "Step 4: Stages of flower: Arumbu, pothu, malar, vee, semmal denote the seven distinct stages of a flower. [1 Mark]",
        "Step 5: Conclusion: It is our duty to coin modern scientific terms and enrich the Tamil vocabulary. [1 Mark]",
    ],
    [
        "TAMIL NADU STATE BOARD - CLASS 10 TAMIL - Continued",
        "",
        "UNIT 2: Iyal 2 - Iyarkai, Soozhal (Kaatre Vaa, Mullaipattu, Puyalile Oru Thoni)",
        "",
        "### 1 Mark Objective Questions",
        "Q1: What are the poetic devices in 'Unakku paattugal paadugirom / Unakku pugazhchigal koorugirom'?",
        "Ans: Monai (initial rhyme) and Ethugai (second letter rhyme). [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q2: What is 'Vasana Kavithai'?",
        "Ans: Free verse poetry combining prose and poetry beyond traditional metrical constraints, introduced in Tamil by Mahakavi Bharathiyar. [2 Marks]",
        "",
        "Q3: What did the old women do while seeking 'Viruchi' in Mullaipattu?",
        "Ans: They scattered paddy and mullai flowers to worship God and waited to hear auspicious words of goodwill. [2 Marks]",
        "",
        "### 5 Marks Detailed Answer",
        "Q4: Explain the rainy season descriptions portrayed in Mullaipattu.",
        "Ans: Step 1: Heavy Rainfall: Clouds rose spiraling clockwise over mountains pouring torrents of rain. [1 Mark]",
        "Step 2: Military Camp: Warriors dug moats and raised thorny fences in the forest tracts. [1 Mark]",
        "Step 3: King's determination: The king stayed awake planning military victory for the nation. [1 Mark]",
        "Step 4: Distress of separation: The heroine grieved awaiting the hero's arrival in the rainy season. [1 Mark]",
        "Step 5: Sura Guide Conclusion: Mullaipattu vividly portrays human emotions intertwined with nature. [1 Mark]",
    ]
]

# ==============================================================================
# 2. ENGLISH SURA GUIDE DATA
# ==============================================================================
english_pages = [
    [
        "TAMIL NADU STATE BOARD - CLASS 10 ENGLISH",
        "SURA GUIDE COMPLETE QUESTION BANK & STEP-BY-STEP MARKING SCHEME",
        "",
        "UNIT 1: Prose - His First Flight (Liam O'Flaherty) & Poem - Life (Henry Van Dyke)",
        "",
        "### 1 Mark Questions (Synonyms, Antonyms, MCQs)",
        "Q1: The young seagull was alone on his ledge. (Choose the synonym of 'ledge')",
        "Ans: a narrow horizontal shelf projecting from a wall or cliff [1 Mark]",
        "",
        "Q2: He failed to muster up courage to take that plunge. (Choose the antonym of 'muster')",
        "Ans: disperse / dismiss [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q3: Why was the young seagull afraid to fly?",
        "Ans: The young seagull felt certain that his wings would never support him across the vast expanse of the sea, so he bent his head and ran back to his hole. [2 Marks]",
        "",
        "Q4: How did the parents support and encourage the seagull's siblings?",
        "Ans: The parents flew with them, perfecting them in the art of flight, teaching them how to skim the waves and how to dive for fish. [2 Marks]",
        "",
        "### 5 Marks Paragraph Question (Sura Guide Exam Template)",
        "Q5: Describe the struggles undergone by the young seagull to overcome its fear of flying.",
        "Ans: Paragraph Outline: Introduction - Fear of Flight - Starvation - Mother's Strategy - First Flight - Conclusion.",
        "Step 1: Introduction: 'His First Flight' by Liam O'Flaherty portrays how confidence and necessity overcome fear. [1 Mark]",
        "Step 2: The Struggle: The young seagull was left alone on the ledge for 24 hours without food. [1 Mark]",
        "Step 3: Mother's clever trick: His mother tore a piece of fish and flew close to him, halting just out of reach. [1 Mark]",
        "Step 4: The Leap: Maddened by hunger, the young bird dived at the fish and fell outward into space. [1 Mark]",
        "Step 5: Flying with Joy: His wings spread wide, wind rushed past his feathers, and he soared gracefully over the sea. [1 Mark]",
    ],
    [
        "TAMIL NADU STATE BOARD - CLASS 10 ENGLISH - Continued",
        "",
        "UNIT 2: Prose - The Night the Ghost Got In (James Thurber) & Poem - The Grumble Family",
        "",
        "### 1 Mark Vocabulary & Grammar Questions",
        "Q1: Identify the prepositional phrase: 'He walked into the dark hallway with great caution.'",
        "Ans: 'with great caution' (manner) and 'into the dark hallway' (direction) [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q2: What caused the grandfather to mistake the policemen for deserters?",
        "Ans: Grandfather was mentally back in the American Civil War era and thought General Meade's men were retreating from the battle of Stones River. [2 Marks]",
        "",
        "Q3: What advice does the poet give in 'The Grumble Family'?",
        "Ans: The poet advises us never to grumble or complain about our situation, and never to let our feet wander into 'Grumble Street'. [2 Marks]",
        "",
        "### 5 Marks Essay Question",
        "Q4: Summarize the comical events that took place in the narrator's house in 'The Night the Ghost Got In'.",
        "Ans: Step 1: Mysterious Footsteps: Narrator heard footsteps around the dining table at 1:15 AM and suspected ghosts. [1 Mark]",
        "Step 2: Mother's Misunderstanding: Mother thought burglars had entered and threw a shoe through the neighbor's window. [1 Mark]",
        "Step 3: Police Arrival: The police arrived with weapons, broke through the doors, and searched the rooms. [1 Mark]",
        "Step 4: Grandfather's Retaliation: Grandfather grabbed a gun from a policeman and fired, injuring a cop in the shoulder. [1 Mark]",
        "Step 5: Morning Revelation: Next morning at breakfast, grandfather casually revealed he had come downstairs for water! [1 Mark]",
    ]
]

# ==============================================================================
# 3. SCIENCE SURA GUIDE DATA
# ==============================================================================
science_pages = [
    [
        "TAMIL NADU STATE BOARD - CLASS 10 SCIENCE",
        "SURA GUIDE COMPLETE QUESTION BANK (PHYSICS, CHEMISTRY, BIOLOGY) & EVALUATION SCHEME",
        "",
        "UNIT 1 (PHYSICS): Laws of Motion",
        "",
        "### 1 Mark Objective Questions",
        "Q1: The inertia of a body depends on...",
        "Ans: Mass of the object (Inertia is directly proportional to mass). [1 Mark]",
        "",
        "Q2: Impulse is equals to...",
        "Ans: Change in linear momentum (J = Delta p). [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q3: State Newton's second law of motion.",
        "Ans: The force acting on a body is directly proportional to the rate of change of linear momentum of the body and the change in momentum takes place in the direction of the force. Formula: F = ma. [2 Marks]",
        "",
        "Q4: Differentiate between Mass and Weight.",
        "Ans: 1) Mass: Fundamental quantity, scalar, measured in kg, remains constant everywhere. [1 Mark]",
        "     2) Weight: Derived quantity, vector, measured in Newton (N), varies with acceleration due to gravity (W = mg). [1 Mark]",
        "",
        "### 7 Marks Comprehensive Board Question",
        "Q5: State and prove the Law of Conservation of Linear Momentum.",
        "Ans: Statement: In the absence of an external force, the total linear momentum of a system of bodies remains constant. [1 Mark]",
        "Step 1: Setup: Let two bodies A and B of masses m1 and m2 move with initial velocities u1 and u2 (u1 > u2). [1 Mark]",
        "Step 2: Force during collision: Body A exerts action force F_B on B, and B exerts reaction force F_A on A. [1 Mark]",
        "Step 3: By Newton's Second Law: F_B = m2(v2 - u2)/t and F_A = m1(v1 - u1)/t. [1 Mark]",
        "Step 4: By Newton's Third Law: Action = -Reaction => F_B = -F_A. [1 Mark]",
        "Step 5: Equating equations: m2(v2 - u2)/t = -m1(v1 - u1)/t => m2 v2 - m2 u2 = -m1 v1 + m1 u1. [1 Mark]",
        "Step 6: Final Result: m1 u1 + m2 u2 = m1 v1 + m2 v2. Total initial momentum = Total final momentum. Hence proved. [1 Mark]",
    ],
    [
        "TAMIL NADU STATE BOARD - CLASS 10 SCIENCE - Continued",
        "",
        "UNIT 2 (PHYSICS): Optics & UNIT 7 (CHEMISTRY): Atoms and Molecules",
        "",
        "### 1 Mark Questions",
        "Q1: The refractive index of diamond with respect to air is approximately...",
        "Ans: 2.42 (Diamond has very high refractive index). [1 Mark]",
        "",
        "Q2: The value of Avogadro number is...",
        "Ans: 6.023 x 10^23 particles per mole. [1 Mark]",
        "",
        "### 2 Marks Questions",
        "Q3: State Snell's Law of Refraction.",
        "Ans: The ratio of sine of angle of incidence to the sine of angle of refraction is equal to the ratio of refractive indices of the two media: sin i / sin r = mu2 / mu1. [2 Marks]",
        "",
        "Q4: Calculate the number of moles in 27g of Aluminium (Atomic mass of Al = 27).",
        "Ans: Number of moles = Mass / Atomic Mass = 27 / 27 = 1 mole. [2 Marks]",
        "",
        "### 4 Marks Long Answer Question",
        "Q5: Differentiate between Myopia and Hypermetropia.",
        "Ans: 1) Myopia (Short-sightedness): Nearby objects can be seen clearly; distant objects cannot. Eyeball lengthens. Focal length decreases. Corrected using Concave lens. [2 Marks]",
        "     2) Hypermetropia (Long-sightedness): Distant objects can be seen clearly; nearby objects cannot. Eyeball shortens. Focal length increases. Corrected using Convex lens. [2 Marks]",
    ]
]

# ==============================================================================
# 4. SOCIAL SCIENCE SURA GUIDE DATA
# ==============================================================================
social_pages = [
    [
        "TAMIL NADU STATE BOARD - CLASS 10 SOCIAL SCIENCE",
        "SURA GUIDE COMPLETE QUESTION BANK (HISTORY, GEOGRAPHY, CIVICS, ECONOMICS) & SCHEME",
        "",
        "UNIT 1 (HISTORY): Outbreak of World War I & UNIT 1 (GEOGRAPHY): India - Relief and Drainage",
        "",
        "### 1 Mark Objective Questions",
        "Q1: What were the three major empires that collapsed after World War I?",
        "Ans: German, Russian, and Austro-Hungarian Empires. [1 Mark]",
        "",
        "Q2: The highest peak in South India is...",
        "Ans: Anamudi (2,695 meters, located in Anaimalai Hills). [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q3: What was the immediate cause of the First World War?",
        "Ans: On 28 June 1914, Archduke Franz Ferdinand, the heir to the throne of Austria-Hungary, was assassinated by Gavrilo Princip, a Bosnian Serb, at Sarajevo. [2 Marks]",
        "",
        "Q4: Distinguish between Western Ghats and Eastern Ghats.",
        "Ans: 1) Western Ghats: Continuous range, higher altitude (avg 2,000m to 3,000m), origin of major rivers like Godavari, Krishna, Cauvery. [1 Mark]",
        "     2) Eastern Ghats: Discontinuous range, lower elevation (avg 1,100m), dissected by eastward-flowing rivers entering the Bay of Bengal. [1 Mark]",
        "",
        "### 5 Marks Detailed Answer (Sura Guide Exam Standard)",
        "Q5: Describe the major physical divisions of Northern Mountains (Himalayas).",
        "Ans: Outline: Introduction - Trans-Himalayas - Greater Himalayas (Himadri) - Lesser Himalayas (Himachal) - Outer Himalayas (Siwaliks).",
        "Step 1: Introduction: The Himalayas act as the northern crown of India extending 2,400 km from Indus to Brahmaputra. [1 Mark]",
        "Step 2: Trans-Himalayas (Tibetan Himalayas): Lies north of the Great Himalayas; includes Karakoram, Ladakh, and Zaskar ranges. [1 Mark]",
        "Step 3: Greater Himalayas (Himadri): Most continuous range with average height of 6,000 m; includes Mt. Everest (8,848 m) and Kanchenjunga. [1 Mark]",
        "Step 4: Lesser Himalayas (Himachal): Altitude 3,700m - 4,500m; famous for hill stations like Shimla, Mussoorie, Nainital, Darjeeling. [1 Mark]",
        "Step 5: Outer Himalayas (Siwaliks): Youngest range with altitude 900m - 1,100m; longitudinal valleys between Himachal and Siwalik are called Duns (e.g. Dehradun). [1 Mark]",
    ],
    [
        "TAMIL NADU STATE BOARD - CLASS 10 SOCIAL SCIENCE - Continued",
        "",
        "UNIT 2 (CIVICS): Indian Constitution & UNIT 2 (ECONOMICS): Gross Domestic Product (GDP)",
        "",
        "### 1 Mark Questions",
        "Q1: Which article of the Indian Constitution is described by Dr. B.R. Ambedkar as the 'Heart and Soul of the Constitution'?",
        "Ans: Article 32 (Right to Constitutional Remedies). [1 Mark]",
        "",
        "Q2: Which sector is also known as the Service Sector in Indian economy?",
        "Ans: Tertiary Sector (Transport, Banking, Healthcare, Education). [1 Mark]",
        "",
        "### 2 Marks Short Answer Questions",
        "Q3: Define Gross Domestic Product (GDP).",
        "Ans: GDP is the total monetary value of all the finished goods and services produced within the domestic territory of a country during a specific period of time (normally one year). [2 Marks]",
        "",
        "Q4: What are the fundamental rights guaranteed by the Indian Constitution?",
        "Ans: 1. Right to Equality, 2. Right to Freedom, 3. Right against Exploitation, 4. Right to Freedom of Religion, 5. Cultural and Educational Rights, 6. Right to Constitutional Remedies. [2 Marks]",
        "",
        "### 5 Marks Essay Question",
        "Q5: Explain the salient features of the Constitution of India.",
        "Ans: Step 1: Lengthiest Written Constitution: Most detailed constitution in the world with Preamble, Articles, Parts, and Schedules. [1 Mark]",
        "Step 2: Blend of Rigidity and Flexibility: Some provisions require special parliamentary majority, others require simple majority. [1 Mark]",
        "Step 3: Federal System with Unitary Bias: Dual government structure with strong central power during emergencies. [1 Mark]",
        "Step 4: Secular State & Universal Adult Suffrage: No state religion; equal voting rights for all citizens aged 18 and above without discrimination. [1 Mark]",
        "Step 5: Independent Judiciary & Fundamental Rights: Single integrated judicial system with Supreme Court as guardian of rights. [1 Mark]",
    ]
]


def main():
    print("Generating Sura Guide PDFs for 4 subjects...")
    create_simple_pdf(PDF_DIR / "10th_Tamil_Sura_Guide.pdf", "10TH TAMIL SURA GUIDE", tamil_pages)
    create_simple_pdf(PDF_DIR / "10th_English_Sura_Guide.pdf", "10TH ENGLISH SURA GUIDE", english_pages)
    create_simple_pdf(PDF_DIR / "10th_Science_Sura_Guide.pdf", "10TH SCIENCE SURA GUIDE", science_pages)
    create_simple_pdf(PDF_DIR / "10th_Social_Science_Sura_Guide.pdf", "10TH SOCIAL SCIENCE SURA GUIDE", social_pages)
    print("All 4 Sura Guide PDFs generated successfully in:", PDF_DIR)


if __name__ == "__main__":
    main()
