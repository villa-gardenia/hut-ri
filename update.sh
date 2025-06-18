#!/bin/bash

INPUT_FILE="./80/README.md"
OUTPUT_FILE="./src/public/data/committee.json"

python3 update.py "$INPUT_FILE" > "$OUTPUT_FILE"
echo "JSON saved to $OUTPUT_FILE"
