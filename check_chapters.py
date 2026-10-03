import json

def main():
    try:
        with open('extracted_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        for page in data['pages']:
            content = page['content']
            if 'STD-10' in content or 'LN-' in content or 'EX-' in content or 'UNIT' in content:
                lines = content.split('\n')
                for line in lines:
                    if 'LN-' in line or 'EX-' in line or 'UNIT' in line:
                        print(f"Page {page['page_number']}: {line.strip()}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
