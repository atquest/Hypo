# Deployment Instructies

## GitHub Pages Deployment

1. **Push naar GitHub** (als je een GitHub account hebt):
   ```bash
   # Voeg GitHub als remote toe
   git remote add github https://github.com/JOUW-USERNAME/Hypo.git

   # Push de code
   git push github claude/mortgage-calculator-graph-01F7SSP4UdjLR4ffFJACogkC:main
   ```

2. **Activeer GitHub Pages**:
   - Ga naar repository Settings
   - Scroll naar "Pages" sectie
   - Selecteer "main" branch
   - Klik "Save"
   - Na enkele minuten is je site live op: `https://JOUW-USERNAME.github.io/Hypo/`

## Andere Hosting Opties

### Netlify Drop
1. Ga naar: https://app.netlify.com/drop
2. Sleep de hele `Hypo` folder naar de browser
3. Krijg direct een live URL

### Vercel
1. Installeer Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in de Hypo folder
3. Volg de instructies

### Simpele HTTP Server (Lokaal testen)
```bash
# Python 3
cd /home/user/Hypo
python3 -m http.server 8000

# Nu toegankelijk op: http://localhost:8000
```

## Lokaal Openen
```bash
# Linux
xdg-open /home/user/Hypo/index.html

# macOS
open /home/user/Hypo/index.html

# Windows
start /home/user/Hypo/index.html
```
