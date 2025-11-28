# 🚀 GitHub Pages Deployment Instructies

De hypotheekcalculator is volledig voorbereid voor GitHub Pages deployment!

## ⚙️ Automatische Deployment (Aanbevolen)

Er is een GitHub Actions workflow geïnstalleerd die **automatisch** deployed naar GitHub Pages.

### Stappen om te activeren:

1. **Ga naar je GitHub repository**: `https://github.com/atquest/Hypo`

2. **Activeer GitHub Pages**:
   - Ga naar **Settings** → **Pages**
   - Bij **Source** selecteer: **GitHub Actions**
   - Klik **Save**

3. **Eerste deployment triggeren**:
   - Ga naar **Actions** tab
   - Klik op de **Deploy to GitHub Pages** workflow
   - Klik **Run workflow** → **Run workflow**

4. **Wacht 1-2 minuten** en je site is live op:
   ```
   https://atquest.github.io/Hypo/
   ```

## 🔄 Wat gebeurt er automatisch?

De GitHub Actions workflow (`.github/workflows/deploy.yml`) zorgt ervoor dat:
- Bij elke push naar de branch automatisch wordt gedeployed
- De nieuwste versie altijd live staat
- Geen handmatige stappen nodig zijn

## ✅ Checklist

- [x] Code gepushed naar repository
- [x] GitHub Actions workflow geïnstalleerd
- [x] `.nojekyll` bestand toegevoegd (voorkomt Jekyll processing)
- [ ] GitHub Pages geactiveerd in repository settings
- [ ] Workflow eenmalig gestart
- [ ] Site live en werkend

## 🌐 Live URL

Na activatie is je hypotheekcalculator toegankelijk op:
```
https://atquest.github.io/Hypo/
```

## 🔧 Troubleshooting

**Workflow faalt?**
- Controleer of GitHub Pages is ingeschakeld in Settings
- Zorg dat 'Read and write permissions' is ingeschakeld onder Settings → Actions → General

**Site niet zichtbaar?**
- Wacht 1-2 minuten na eerste deployment
- Check Actions tab voor deployment status
- Controleer of de URL correct is (inclusief repository naam)

**403 of 404 fout?**
- Ga naar Settings → Pages
- Controleer of de Source correct is ingesteld op "GitHub Actions"

## 📱 Delen

Zodra live, kan je de calculator delen via:
- Directe link: `https://atquest.github.io/Hypo/`
- QR code genereren voor mobiel gebruik
- Embedden in andere websites

---

**Hulp nodig?** Check de GitHub Pages documentatie: https://docs.github.com/en/pages
