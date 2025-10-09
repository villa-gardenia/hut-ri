# Scripts

This directory contains utility scripts for the project.

## deploy-contributions.sh

Deploys the contributions visualization to the public folder for GitHub Pages deployment.

### What it does:
1. Creates `src/public/contributions/` directory
2. Copies `data/donation-visualization.html` as `index.html`
3. Copies `data/villa-gardenia.geojson` for map data
4. Copies `data/donation-maps.json` for reference

### Usage:
```bash
./scripts/deploy-contributions.sh
```

### Integration:
This script is automatically run during the GitHub Actions deployment workflow before the Next.js build step. The resulting files will be available at:
```
https://villa-gardenia.github.io/hut-ri/contributions/
```

### Files structure after deployment:
```
src/public/contributions/
├── index.html (donation visualization)
├── villa-gardenia.geojson (map boundaries)
└── donation-maps.json (donation data)
```
