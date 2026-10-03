#!/usr/bin/env python3
"""
Custom Bamini font converter tuned for 10th Tamil Study Material (S. Saravanan)
"""
import re
import os
import json

def convert_custom_bamini(text):
    if not text:
        return ""
    
    # Numbers
    num_map = {
        '': '1', '': '0', '': '2', '': '6', '': '7', '': '8', '': '3', '': '4', '': '5', '': '9', '': '0'
    }
    for k, v in num_map.items():
        text = text.replace(k, v)
        
    text = text.replace('~', '“').replace('`', '”')

    # Basic consonants
    # Order matters for multi-character replacements
    # Consonants with virama (dot / pulli)
    pulli_map = [
        ('f;', 'க்'), ('=;', 'ங்'), ('r;', 'ச்'), ('Q;', 'ஞ்'), ('l;', 'ட்'),
        ('z;', 'ண்'), ('j;', 'த்'), ('e;', 'ந்'), ('g;', 'ப்'), ('k;', 'ம்'),
        ('a;', 'ய்'), ('u;', 'ர்'), ('y;', 'ல்'), ('t;', 'வ்'), ('H;', 'ழ்'),
        ('s;', 'ள்'), ('w;', 'ற்'), ('d;', 'ன்'), ('P;', 'ஜ்'), ('Z;', 'ஷ்'),
        ('S;', 'ஸ்'), ('h;', 'ஹ்'), ('G;', 'ழு')
    ]
    
    # Standalone vowels
    vowels = [
        ('xs;', 'ஔ'), ('xs', 'ஔ'),
        ('m', 'அ'), ('M', 'ஆ'), (',', 'இ'), ('<', 'ஈ'), ('c', 'உ'), ('C', 'ஊ'),
        ('v', 'எ'), ('V', 'ஏ'), ('I', 'ஐ'), ('x', 'ஒ'), ('X', 'ஓ'), ('t/', 'ஃ')
    ]
    
    # Special u and uu combinations
    u_combos = [
        ('R+', 'சூ'), ('J+', 'தூ'), ('E+', 'நூ'), ('G+', 'பூ'), ('K+', 'மூ'),
        ('A+', 'யூ'), ('U+', 'ரூ'), ('Y+', 'லூ'), ('t]', 'வூ'), ('G:', 'ழூ'),
        ('S]', 'ளூ'), ('W+', 'றூ'), ('D+', 'னூ'),
        ('F', 'கு'), ('T', 'கூ'), ('R', 'சு'), ('L', 'டு'), ('^', 'டூ'),
        ('Z', 'ணு'), ('J', 'து'), ('E', 'நு'), ('G', 'பு'), ('K', 'மு'),
        ('A', 'யு'), ('U', 'ரு'), ('Y', 'லு'), ('t[', 'வு'), ('S[', 'ளு'),
        ('W', 'று'), ('D', 'னு')
    ]

    c_base = {
        'f': 'க', '=': 'ங', 'r': 'ச', 'Q': 'ஞ', 'l': 'ட',
        'z': 'ண', 'j': 'த', 'e': 'ந', 'g': 'ப', 'k': 'ம',
        'a': 'ய', 'u': 'ர', 'y': 'ல', 't': 'வ', 'H': 'ழ',
        's': 'ள', 'w': 'ற', 'd': 'ன', 'P': 'ஜ', 'Z': 'ஷ',
        'S': 'ஸ'
    }

    # Complex regex:
    # 1. 'b' + C + 'h' -> C + 'ொ'
    # 2. 'n' + C + 'h' -> C + 'ோ'
    # 3. 'b' + C + 's' -> C + 'ௌ'
    # 4. 'b' + C -> C + 'ெ'
    # 5. 'n' + C -> C + 'ே'
    # 6. 'i' + C -> C + 'ை'
    
    res = []
    i = 0
    n = len(text)
    
    while i < n:
        # Check two/three char patterns
        sub3 = text[i:i+3]
        sub2 = text[i:i+2]
        ch = text[i]

        # 1. bo/no/bau patterns
        if i + 2 < n and text[i] == 'b' and text[i+1] in c_base and text[i+2] == 'h':
            res.append(c_base[text[i+1]] + 'ொ')
            i += 3
            continue
        if i + 2 < n and text[i] == 'n' and text[i+1] in c_base and text[i+2] == 'h':
            res.append(c_base[text[i+1]] + 'ோ')
            i += 3
            continue
        if i + 2 < n and text[i] == 'b' and text[i+1] in c_base and text[i+2] == 's':
            res.append(c_base[text[i+1]] + 'ௌ')
            i += 3
            continue
            
        # 2. be/ne/ai patterns
        if i + 1 < n and text[i] == 'b' and text[i+1] in c_base:
            res.append(c_base[text[i+1]] + 'ெ')
            i += 2
            continue
        if i + 1 < n and text[i] == 'n' and text[i+1] in c_base:
            res.append(c_base[text[i+1]] + 'ே')
            i += 2
            continue
        if i + 1 < n and text[i] == 'i' and text[i+1] in c_base:
            res.append(c_base[text[i+1]] + 'ை')
            i += 2
            continue

        # Check pulli
        matched_pulli = False
        for k, v in pulli_map:
            if text[i:].startswith(k):
                res.append(v)
                i += len(k)
                matched_pulli = True
                break
        if matched_pulli:
            continue

        # Check special u/uu
        matched_u = False
        for k, v in u_combos:
            if text[i:].startswith(k):
                res.append(v)
                i += len(k)
                matched_u = True
                break
        if matched_u:
            continue

        # Check vowels
        matched_vowel = False
        for k, v in vowels:
            if text[i:].startswith(k):
                res.append(v)
                i += len(k)
                matched_vowel = True
                break
        if matched_vowel:
            continue

        # Check C + 'h' (aa) or C + 'p' (i) or C + 'P' (ii)
        if ch in c_base:
            base_c = c_base[ch]
            if i + 1 < n and text[i+1] == 'h':
                res.append(base_c + 'ா')
                i += 2
                continue
            elif i + 1 < n and text[i+1] == 'p':
                res.append(base_c + 'ி')
                i += 2
                continue
            elif i + 1 < n and text[i+1] == 'P':
                res.append(base_c + 'ீ')
                i += 2
                continue
            elif i + 1 < n and text[i+1] == '[':
                res.append(base_c + 'ு')
                i += 2
                continue
            elif i + 1 < n and text[i+1] == ']':
                res.append(base_c + 'ூ')
                i += 2
                continue
            else:
                res.append(base_c)
                i += 1
                continue

        # Normal character
        res.append(ch)
        i += 1

    out = "".join(res)
    # clean up remaining artifacts
    out = out.replace(" ;", "்")
    return out

if __name__ == "__main__":
    sample = "1 .fhyf; fzpjk; ftpijapy; ,lk; bgw; w bjhlu; tpil: ,fH; e; jhy; vd; kdk; ,we; J tplhJ."
    print("Input:", sample)
    decoded = convert_custom_bamini(sample)
    print("Decoded:", decoded)
