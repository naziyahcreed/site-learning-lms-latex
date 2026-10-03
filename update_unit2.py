import re

# Read current english unit 2
with open("src/data/englishMedium/unit2.ts", "r", encoding="utf-8") as f:
    en_content = f.read()

# Read current tamil unit 2
with open("src/data/tamilMedium/unit2.ts", "r", encoding="utf-8") as f:
    tm_content = f.read()

print("Current EN length:", len(en_content), "TM length:", len(tm_content))
