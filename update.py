import sys
import json
import re

filename = sys.argv[1]

with open(filename, encoding="utf-8") as f:
    lines = f.readlines()

data = {"title": "", "description": "", "teams": []}

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
        # Save previous role to team before switching team
        if current_role:
            current_team["roles"].append(current_role)
            current_role = None

        # Save current team before starting a new one
        if current_team:
            data["teams"].append(current_team)

        current_team = {"name": line.replace("## ", "").strip(), "roles": []}

    # Sub-header role
    elif line.startswith("### "):
        # Save previous role before starting new one
        if current_role:
            current_team["roles"].append(current_role)

        current_role = {"title": "", "names": [], "description": ""}

        role_header = line.replace("### ", "").strip()
        match = re.match(r"(.+?) – (.+)", role_header)
        if match:
            # title (e.g., Ketua Panitia (Event Director))
            role_title_part = match.group(1).strip()
            title_match = re.search(r"\((.*?)\)", role_title_part)
            if title_match:
                current_role["title"] = title_match.group(1).strip()
            current_role["names"] = [
                name.strip() for name in match.group(2).split("&")
            ]
        else:
            # fallback if no "–"
            title_match = re.search(r"\((.*?)\)", role_header)
            if title_match:
                current_role["title"] = title_match.group(1).strip()

    # Paragraf deskripsi
    elif line and current_role:
        if current_role["description"]:
            current_role["description"] += " " + line
        else:
            current_role["description"] = line

# Final flush of last role and team
if current_role:
    current_team["roles"].append(current_role)
if current_team:
    data["teams"].append(current_team)

print(json.dumps(data, ensure_ascii=False, indent=2))
