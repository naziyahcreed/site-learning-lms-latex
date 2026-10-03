import json
import sys
sys.path.append('bamini-unicode-docx')
from BaminiDict import bamini_dict

def convert_bamini_to_unicode(text):
    for key, val in bamini_dict.items():
        text = text.replace(key, val)
    return text

def main():
    try:
        with open('extracted_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        unit1_pages = []
        for page in data['pages']:
            # Try to grab first 20 pages as an example, as we don't know the exact page boundaries for Unit 1.
            # Page 1 to 20 should cover a good chunk of math equations.
            if page['page_number'] <= 20:
                text = convert_bamini_to_unicode(page['content'])
                unit1_pages.append({
                    "page_number": page['page_number'],
                    "content": text
                })

        with open('unit1_extracted.json', 'w', encoding='utf-8') as f:
            json.dump({"pages": unit1_pages}, f, ensure_ascii=False, indent=2)
            
        print(f"Successfully converted {len(unit1_pages)} pages to unit1_extracted.json")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
