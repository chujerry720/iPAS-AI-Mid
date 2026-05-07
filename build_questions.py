"""Parse exam markdown files into questions.json with topic tags."""
import re
import json
from pathlib import Path
from collections import Counter

# Hardcoded answer keys (from the official answer column in PDFs)
ANSWERS = {
    1: {  # 科目1
        1:'B', 2:'A', 3:'B', 4:'C', 5:'A', 6:'B', 7:'A', 8:'C', 9:'B', 10:'D',
        11:'C', 12:'B', 13:'B', 14:'A', 15:'C', 16:'D', 17:'D', 18:'D', 19:'B', 20:'B',
        21:'B', 22:'D', 23:'A', 24:'D', 25:'B', 26:'D', 27:'C', 28:'C', 29:'B', 30:'A',
        31:'B', 32:'D', 33:'C', 34:'D', 35:'A', 36:'B', 37:'B', 38:'B', 39:'C', 40:'A',
        41:'A', 42:'D', 43:'B', 44:'C', 45:'D', 46:'A', 47:'C', 48:'B', 49:'A', 50:'C',
    },
    2: {  # 科目2
        1:'D', 2:'B', 3:'A', 4:'B', 5:'B', 6:'C', 7:'C', 8:'B', 9:'C', 10:'C',
        11:'C', 12:'A', 13:'D', 14:'D', 15:'C', 16:'A', 17:'B', 18:'A', 19:'C', 20:'D',
        21:'B', 22:'D', 23:'C', 24:'A', 25:'A', 26:'C', 27:'D', 28:'A', 29:'D', 30:'C',
        31:'B', 32:'A', 33:'D', 34:'B', 35:'B', 36:'B', 37:'C', 38:'B', 39:'D', 40:'B',
        41:'A', 42:'C', 43:'B', 44:'D', 45:'A', 46:'C', 47:'B', 48:'C', 49:'C', 50:'B',
    },
    3: {  # 科目3
        1:'B', 2:'C', 3:'C', 4:'B', 5:'A', 6:'C', 7:'A', 8:'D', 9:'A', 10:'C',
        11:'D', 12:'C', 13:'B', 14:'C', 15:'B', 16:'A', 17:'B', 18:'A', 19:'C', 20:'C',
        21:'C', 22:'B', 23:'A', 24:'C', 25:'A', 26:'D', 27:'D', 28:'C', 29:'D', 30:'C',
        31:'B', 32:'D', 33:'B', 34:'D', 35:'A', 36:'D', 37:'B', 38:'B', 39:'C', 40:'C',
        41:'D', 42:'B', 43:'A', 44:'D', 45:'B', 46:'B', 47:'B', 48:'C', 49:'C', 50:'C',
    },
}

# Topic tags
TAGS = {
    1: {
        1:"NLP", 2:"NLP", 3:"NLP", 4:"NLP", 5:"NLP", 6:"NLP",
        7:"CV", 8:"DL基礎", 9:"GenAI", 10:"評估",
        11:"演算法", 12:"統計", 13:"MLOps", 14:"訓練",
        15:"MLOps", 16:"NLP", 17:"NLP", 18:"NLP", 19:"NLP",
        20:"GenAI", 21:"多模態", 22:"MLOps", 23:"AI風險",
        24:"AI風險", 25:"AI風險", 26:"統計", 27:"特徵工程",
        28:"特徵工程", 29:"MLOps", 30:"MLOps", 31:"MLOps",
        32:"MLOps", 33:"NLP", 34:"CV", 35:"多模態",
        36:"訓練", 37:"訓練", 38:"GenAI", 39:"統計",
        40:"GenAI", 41:"訓練", 42:"MLOps", 43:"訓練",
        44:"GenAI", 45:"演算法", 46:"MLOps", 47:"NLP",
        48:"演算法", 49:"AI風險", 50:"多模態",
    },
    2: {
        1:"統計", 2:"Python", 3:"統計", 4:"統計",
        5:"編碼", 6:"編碼", 7:"資料庫", 8:"特徵工程",
        9:"標準化", 10:"異常偵測", 11:"大數據架構",
        12:"不平衡", 13:"隱私", 14:"演算法", 15:"統計",
        16:"統計", 17:"編碼", 18:"資料庫", 19:"大數據架構",
        20:"隱私", 21:"視覺化", 22:"視覺化", 23:"假設檢定",
        24:"大數據架構", 25:"視覺化", 26:"分析方法",
        27:"大數據架構", 28:"演算法", 29:"PCA", 30:"統計",
        31:"統計", 32:"隱私", 33:"統計", 34:"資料庫",
        35:"資料庫", 36:"統計", 37:"不平衡", 38:"假設檢定",
        39:"驗證", 40:"驗證", 41:"演算法", 42:"Python",
        43:"Python", 44:"Python", 45:"Python", 46:"Python",
        47:"Python", 48:"Python", 49:"Python", 50:"Python",
    },
    3: {
        2:"ML/特徵工程", 5:"CV", 6:"CV", 9:"標準化", 11:"訓練",
        14:"AI風險", 18:"演算法", 19:"不平衡", 20:"特徵工程",
        21:"NLP", 24:"統計", 26:"訓練", 27:"DL基礎",
        28:"AI風險", 29:"驗證", 30:"評估", 31:"訓練",
        32:"特徵工程", 34:"驗證", 35:"PCA", 36:"隱私",
        37:"隱私", 42:"CV", 43:"CV", 44:"CV", 45:"CV",
        48:"Python", 49:"Python", 50:"Python",
    },
}
S3_USE = set(TAGS[3].keys())

NOISE_PATTERNS = [
    r'^114 年第.*$',
    r'^第[一二三]科：.*$',
    r'^考試日期：.*$',
    r'^試題公告日期：.*$',
    r'^第\s*\d+\s*頁.*$',
    r'^答案\s*$',
    r'^答\s*$',
    r'^案\s*$',
    r'^題目\s*$',
    r'^《以下空白》\s*$',
]
FW_MAP = {'Ａ':'A','Ｂ':'B','Ｃ':'C','Ｄ':'D'}


def clean_noise(text):
    out = []
    for ln in text.split('\n'):
        s = ln.strip()
        if any(re.match(p, s) for p in NOISE_PATTERNS):
            continue
        out.append(ln)
    return '\n'.join(out)


def split_options(opts_body):
    """Given option text starting with (A)..., return dict of A/B/C/D."""
    all_matches = list(re.finditer(r'\(([ABCD])\)', opts_body))
    seen_first = {}
    for m in all_matches:
        l = m.group(1)
        if l not in seen_first:
            seen_first[l] = m.start()
    if len(seen_first) != 4:
        return None
    sorted_starts = sorted(seen_first.items(), key=lambda x: x[1])
    opts = {}
    for i, (letter, pos) in enumerate(sorted_starts):
        end = sorted_starts[i + 1][1] if i + 1 < len(sorted_starts) else len(opts_body)
        content = opts_body[pos + 3:end].strip()
        content = re.sub(r'[;；]\s*$', '', content)
        content = re.sub(r'\s+', ' ', content).strip()
        opts[letter] = content
    return opts


def find_all_heads(text):
    """Find question heads. Returns list of (qnum, ans_or_None, start, end)."""
    heads = []

    # Pattern A: answer letter line + Q number line (multi-line, used for Q1-9 in 科目2)
    p1 = re.compile(r'^([ABCDＡＢＣＤ])\s*\n\s*(\d+)\.?\s', re.MULTILINE)
    for m in p1.finditer(text):
        ans_raw = m.group(1)
        ans = FW_MAP.get(ans_raw, ans_raw)
        heads.append((int(m.group(2)), ans, m.start(), m.end()))

    # Pattern B: same-line answer letter + Q number (used for Q10+ in 科目2 and 科目3)
    p2 = re.compile(r'^([ABCDＡＢＣＤ])\s+(\d+)\.?\s', re.MULTILINE)
    primary_qnums = {h[0] for h in heads}
    for m in p2.finditer(text):
        qnum = int(m.group(2))
        if qnum in primary_qnums or not (1 <= qnum <= 50):
            continue
        ans_raw = m.group(1)
        ans = FW_MAP.get(ans_raw, ans_raw)
        heads.append((qnum, ans, m.start(), m.end()))

    # Pattern C: just "第 N" fallback (rare, when answer column corrupted entirely)
    p3 = re.compile(r'^第\s*(\d+)[\s.]', re.MULTILINE)
    primary_qnums = {h[0] for h in heads}
    for m in p3.finditer(text):
        qnum = int(m.group(1))
        if qnum in primary_qnums or not (1 <= qnum <= 50):
            continue
        heads.append((qnum, None, m.start(), m.end()))

    heads.sort(key=lambda h: h[2])
    return heads


def parse_exam_md(path, subject):
    text = Path(path).read_text(encoding='utf-8')
    text = re.sub(r'^# .*?\n', '', text)
    text = clean_noise(text)

    heads = find_all_heads(text)
    questions = []

    seen_qnums = set()
    for i, (qnum, ans, hstart, hend) in enumerate(heads):
        if qnum in seen_qnums:
            continue
        if subject == 3 and qnum not in S3_USE:
            continue

        body_end = heads[i + 1][2] if i + 1 < len(heads) else len(text)
        body = text[hend:body_end].strip()

        a_pos = body.find('(A)')
        if a_pos == -1:
            continue
        q_text = body[:a_pos].strip()
        opts_body = body[a_pos:]

        opts = split_options(opts_body)
        if not opts:
            continue

        q_text = re.sub(r'\s+', ' ', q_text).strip()
        if not q_text:
            continue

        # Use hardcoded answer if missing or to verify
        official_ans = ANSWERS.get(subject, {}).get(qnum)
        final_ans = official_ans if official_ans else ans

        topic = TAGS.get(subject, {}).get(qnum, "其他")
        questions.append({
            "id": f"s{subject}q{qnum}",
            "subject": subject,
            "number": qnum,
            "question": q_text,
            "options": opts,
            "answer": final_ans,
            "topic": topic,
        })
        seen_qnums.add(qnum)

    questions.sort(key=lambda q: q['number'])
    return questions


def main():
    base = Path("C:/MyProject/ClaudeCode/iPAS-AI/study/mobile")
    files = [
        (base / "EXAM_科目1.md", 1),
        (base / "EXAM_科目2.md", 2),
        (base / "EXAM_科目3_補充.md", 3),
    ]

    all_q = []
    for path, subj in files:
        qs = parse_exam_md(path, subj)
        nums = [q['number'] for q in qs]
        print(f"科目{subj}: {len(qs)} 題 — {nums}")
        all_q.extend(qs)

    out = Path("C:/MyProject/ClaudeCode/iPAS-AI-Mid/js/questions.js")
    js_content = (
        f"// Auto-generated. Total: {len(all_q)} questions.\n"
        f"const QUESTIONS = {json.dumps(all_q, ensure_ascii=False, indent=2)};\n"
    )
    out.write_text(js_content, encoding='utf-8')
    print(f"\nWrote {out} ({out.stat().st_size:,} bytes)")

    by_subject = {}
    for q in all_q:
        by_subject.setdefault(q['subject'], Counter())[q['topic']] += 1
    for s, c in sorted(by_subject.items()):
        print(f"\n科目{s} 主題分布:")
        for t, n in c.most_common():
            print(f"  {t}: {n}")


if __name__ == "__main__":
    main()
