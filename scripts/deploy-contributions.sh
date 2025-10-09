#!/bin/bash

# Deploy contributions visualization to public/contributions folder
# This script copies the donation visualization and required assets
# to the Next.js public folder for deployment

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Deploying contributions visualization...${NC}"

# Define paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
DATA_DIR="$PROJECT_ROOT/data"
PUBLIC_DIR="$PROJECT_ROOT/src/public"
CONTRIBUTIONS_DIR="$PUBLIC_DIR/contributions"

# Create contributions directory if it doesn't exist
echo -e "${BLUE}Creating contributions directory...${NC}"
mkdir -p "$CONTRIBUTIONS_DIR"

# Copy donation visualization as index.html
echo -e "${BLUE}Copying donation visualization...${NC}"
cp "$DATA_DIR/donation-visualization.html" "$CONTRIBUTIONS_DIR/index.html"

# Copy GeoJSON data
echo -e "${BLUE}Copying GeoJSON data...${NC}"
cp "$DATA_DIR/villa-gardenia.geojson" "$CONTRIBUTIONS_DIR/"

# Copy JSON data (optional, for potential future use)
echo -e "${BLUE}Copying donation data...${NC}"
cp "$DATA_DIR/donation-maps.json" "$CONTRIBUTIONS_DIR/"

echo -e "${GREEN}✓ Contributions visualization deployed successfully!${NC}"
echo -e "${GREEN}✓ Files copied to: $CONTRIBUTIONS_DIR${NC}"
echo -e "${GREEN}✓ Will be available at: /contributions/${NC}"
