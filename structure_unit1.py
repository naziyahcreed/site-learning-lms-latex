import os
import json
import re

def process():
    auto_file = '/home/hp/Videos/school/school/vidhya-shakthi/frontend/src/data/unit1_auto.ts'
    new_file = '/home/hp/Videos/school/school/vidhya-shakthi/frontend/src/data/unit1_new.ts'
    
    with open(auto_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract the pages array string
    start_idx = content.find('pages: [')
    end_idx = content.rfind(']')
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find pages array.")
        return
        
    pages_str = content[start_idx + 8 : end_idx]
    
    pages = []
    # match strings between quotes, ignoring escaped quotes
    for page_match in re.finditer(r'"((?:[^"\\]|\\.)*)"', pages_str):
        raw_str = page_match.group(1)
        decoded_str = bytes(raw_str, "utf-8").decode("unicode_escape")
        pages.append(decoded_str)
        
    print(f"Extracted {len(pages)} pages.")
    
    ts_output = """
export const unit1TamilNew = {
  id: 'tm_unit_1_new',
  chapterNumber: 1,
  romanNumeral: 'I',
  title: 'உறவுகளும் சார்புகளும் (Full Unit 1)',
  subtitle: 'PDF-ல் இருந்து எடுக்கப்பட்ட அனைத்து 24 பக்கங்களும்',
  synopsis: 'சுரா வழிகாட்டி pdf-ல் கொடுக்கப்பட்டுள்ள முழுமையான தீர்வுகள்.',
  prerequisites: ['கணங்கள்', 'சார்புகள்'],
  sections: [
    {
      id: 'tm_sec_1_all',
      sectionNumber: '1.0',
      title: 'முழுமையான அலகு 1 கணக்குகள்',
      introText: 'PDF-ன் படி அனைத்துப் பக்கங்களும்.',
      items: [],
      problems: [
"""
    
    for i, page_text in enumerate(pages):
        prob_id = f"ta_prob_1_page_{i+1}"
        number = f"பக்கம் {i+1}"
        title = f"அலகு 1 - பக்கம் {i+1}ன் கணக்குகள்"
        
        # Escape string for JS literal
        walkthrough = json.dumps(page_text)
        
        ts_output += f"""
        {{
          id: '{prob_id}',
          number: '{number}',
          title: '{title}',
          difficulty: 'Intermediate',
          statementLatex: 'பக்கம் {i+1}-ல் உள்ள கணக்குகள் கீழே கொடுக்கப்பட்டுள்ளன.',
          description: 'PDF பக்கத்திலிருந்து எடுக்கப்பட்ட விவரம்.',
          guidedSteps: [],
          finalSolutionLatex: 'பக்கம் {i+1}',
          fullSolutionWalkthrough: {walkthrough}
        }},
"""

    ts_output += """
      ]
    }
  ]
};
"""
    with open(new_file, 'w', encoding='utf-8') as f:
        f.write(ts_output)
        
    print("Successfully wrote unit1_new.ts")

if __name__ == '__main__':
    process()
