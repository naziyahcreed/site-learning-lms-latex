import json

def main():
    try:
        with open('extracted.txt', 'r', encoding='utf-8') as f:
            text = f.read()
            
        pages = text.split('\x0c')
        
        data = {
            "title": "10th Maths Study Material Tamil Medium",
            "pages": []
        }
        
        for i, page in enumerate(pages):
            if page.strip():
                data["pages"].append({
                    "page_number": i + 1,
                    "content": page.strip()
                })
                
        with open('extracted_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"Successfully extracted {len(data['pages'])} pages to extracted_data.json")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
