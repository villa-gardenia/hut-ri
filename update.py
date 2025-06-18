import sys
import json
import re

filename = sys.argv[1]

with open(filename, encoding='utf-8') as f:
    lines = f.readlines()

data = {
    "title": "",
    "description": "",
    "teams": []
}

current_team = None
current_role = None

for line in lines:
    line = line.strip()
    # Judul utama
    if line.startswith("# "):
        data["title"] = line[2:].strip()

    # Deskripsi setelah judul
    elif line.startswith("📌"):
        data["description"] = line.strip()

    # Header tim
    elif line.startswith("## "):
        if current_team:
            data["teams"].append(current_team)
        current_team = {
            "name": line.replace("## ", "").strip(),
            "roles": []
        }

    # Sub-header role
    elif line.startswith("### "):
        if current_role:
            current_team["roles"].append(current_role)
        current_role = {
            "title": "",
            "names": [],
            "description": ""
        }
        role_header = line.replace("### ", "").strip()
        match = re.match(r"(.+?) – (.+)", role_header)
        if match:
            current_role["title"] = match.group(1).strip().split("(")[1].replace(")", "")
            current_role["names"] = [name.strip() for name in match.group(2).split("&")]
        else:
            current_role["title"] = role_header.split("(")[1].replace(")", "")

    # Paragraf deskripsi
    elif line and current_role:
        if current_role["description"]:
            current_role["description"] += " " + line
        else:
            current_role["description"] = line

# Push the last role and team
if current_role:
    current_team["roles"].append(current_role)
if current_team:
    data["teams"].append(current_team)

print(json.dumps(data, ensure_ascii=False, indent=2))
