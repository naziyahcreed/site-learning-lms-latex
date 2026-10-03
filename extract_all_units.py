import json
import re
import sys
import os

# Add bamini to sys path
sys.path.append(os.path.join(os.path.dirname(__file__), 'bamini-unicode-docx'))
from BaminiDict import bamini_dict

def clean_links(text):
    text = text.replace('www.Padasalai.Net', '')
    text = text.replace('www.TrbTnpsc.Com', '')
    text = text.replace('Kindly Send me Your Key Answer to Our email id - Padasalai.net@gmail.com', '')
    text = text.replace('முiனெடல ளுநனெ அந லுழரச முநல யுளெறநச வழ ழுரச நஅயடை னை - Pயனயளயடயi.நெவ;பஅயடை.உழஅ', '')
    text = text.replace('ww w. Pa da sa la i.N et', '')
    # Sometimes it comes as multi-line
    text = re.sub(r'ww\s*w\.\s*Pa\s*da\s*sa\s*la\s*i\.N\s*et', '', text, flags=re.IGNORECASE)
    return text

def fix_math_symbols(text):
    # ooh is mostly +, but sometimes it's } at the end.
    # We will just replace it with + and fix it manually if needed, or if it's right before a newline, maybe }
    # Let's do simple regex: if ooh is right after ..., it's }
    text = re.sub(r'…\s*ooh', r'... }', text)
    text = text.replace('ooh', '+')
    text = text.replace('ஸ்ரீ', '=')
    text = text.replace('ழூ', '{')
    text = text.replace('∈', '\\in ')
    text = text.replace('∉', '\\notin ')
    text = text.replace('∪', '\\cup ')
    text = text.replace('∩', '\\cap ')
    text = text.replace('≤', '\\le ')
    text = text.replace('≥', '\\ge ')
    text = text.replace('≠', '\\neq ')
    return text

def convert_bamini(text):
    for key, val in bamini_dict.items():
        text = text.replace(key, val)
    return text

def process_file():
    input_file = '/home/hp/Videos/school/school/site-learning-lms-latex/extracted_data.json'
    output_dir = '/home/hp/Videos/school/school/vidhya-shakthi/frontend/src/data'
    
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    current_unit = None
    units_content = {i: [] for i in range(1, 9)}
    
    for page in data['pages']:
        content = page['content']
        
        # Detect unit number
        match = re.search(r'LN-(\d+)', content)
        if match:
            unit_num = int(match.group(1))
            if 1 <= unit_num <= 8:
                current_unit = unit_num
                
        if current_unit is not None:
            cleaned = clean_links(content)
            # We fix math symbols before Bamini conversion because bamini_dict might ruin them
            cleaned = fix_math_symbols(cleaned)
            converted = convert_bamini(cleaned)
            units_content[current_unit].append(converted)
            
    for unit_num, pages in units_content.items():
        if not pages:
            continue
            
        ts_content = f"// Auto-extracted unit {unit_num}\\n"
        ts_content += "export const unit" + str(unit_num) + "Auto = {\\n"
        ts_content += f"  id: 'tm_unit_{unit_num}',\\n"
        ts_content += f"  chapterNumber: {unit_num},\\n"
        ts_content += f"  pages: [\\n"
        
        for i, page_text in enumerate(pages):
            escaped_text = json.dumps(page_text.strip())
            ts_content += f"    {escaped_text},\\n"
            
        ts_content += "  ]\\n};\\n"
        
        out_path = os.path.join(output_dir, f'unit{unit_num}_auto.ts')
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
            
        print(f"Generated {out_path} with {len(pages)} pages.")

if __name__ == '__main__':
    process_file()
