# 💰 Hypotheekcalculator

Een moderne, interactieve hypotheekcalculator met real-time grafieken en uitgebreide aflossingstabellen.

![Hypotheekcalculator](https://img.shields.io/badge/status-actief-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Functies

### 📊 Berekeningsfunctionaliteit
- **Hypotheekbedrag**: Instelbaar van €50.000 tot €1.000.000
- **Rentepercentage**: Aanpasbaar tussen 0% en 20%
- **Looptijd**: Variabel van 1 tot 50 jaar
- **Eigen inbreng**: Tot €200.000 instelbaar

### 🎛️ Gebruiksvriendelijke Interface
- **Dubbele invoer**: Tekstvelden én sliders voor elke parameter
- **Real-time updates**: Automatische herberekening bij elke wijziging
- **Responsive design**: Werkt perfect op desktop, tablet en mobiel
- **Reset functie**: Eenvoudig terug naar standaardwaarden

### 📈 Interactieve Visualisatie
- **Dynamische grafiek** met Chart.js
- Visualisatie van drie datasets:
  - 🔵 Hoofdsom betaling
  - 🔴 Rente betaling
  - 🟢 Restschuld over tijd
- Hover tooltips met gedetailleerde informatie
- Dubbele Y-assen voor optimale leesbaarheid

### 📋 Uitgebreide Resultaten
- **Maandelijkse betaling**: Exacte maandlast
- **Totale kosten**: Volledige terugbetaling inclusief rente
- **Totale rente**: Overzicht van rentekosten
- **Loan-to-Value (LTV)**: Verhouding hypotheek/totaalprijs
- **Gedetailleerde samenvatting**: Alle parameters in één overzicht

### 📄 Aflossingstabel
- **Volledig maandelijks overzicht** van de hele looptijd
- **Jaarlijkse samenvatting** optie voor beter overzicht
- Per periode zichtbaar:
  - Betaling
  - Hoofdsom aflossing
  - Rente betaling
  - Resterende schuld

## 🚀 Gebruik

### Direct starten
1. Open `index.html` in een moderne webbrowser
2. Pas de parameters aan met de sliders of invoervelden
3. Bekijk direct de resultaten en grafieken

Geen installatie of build proces nodig!

### Parameters aanpassen
- **Hypotheekbedrag**: Scroll of typ het gewenste bedrag
- **Rente**: Stel het actuele rentepercentage in
- **Looptijd**: Kies de gewenste looptijd in jaren
- **Eigen inbreng**: Voer eventuele eigen middelen in

### Resultaten interpreteren
- **Maandelijkse betaling**: Dit is uw vaste maandlast (annuïtair)
- **Totale kosten**: Som van alle betalingen over de looptijd
- **Totale rente**: Het verschil tussen totale kosten en hoofdsom
- **LTV percentage**: Percentage van de aankoopprijs dat gefinancierd wordt

### Grafiek lezen
- **Blauw (Hoofdsom)**: Deel van maandlast dat de schuld verlaagt
- **Rood (Rente)**: Deel dat naar de bank gaat als rente
- **Groen (Restschuld)**: Resterende schuld op dat moment

💡 **Tip**: In het begin betaalt u vooral rente, later vooral hoofdsom!

## 🛠️ Technische Details

### Technologieën
- **HTML5**: Semantische structuur
- **CSS3**: Modern design met gradients en transitions
- **JavaScript (ES6+)**: Berekeningslogica en interactiviteit
- **Chart.js 4.4.0**: Geavanceerde grafieken

### Berekeningen
De calculator gebruikt de standaard annuïteitsformule:

```
M = P × (r × (1 + r)^n) / ((1 + r)^n - 1)
```

Waar:
- M = Maandelijkse betaling
- P = Hoofdsom (principal)
- r = Maandelijkse rente (jaarrente / 12)
- n = Aantal maanden (jaren × 12)

### Browser Compatibiliteit
- ✅ Chrome/Edge (versie 90+)
- ✅ Firefox (versie 88+)
- ✅ Safari (versie 14+)
- ✅ Opera (versie 76+)

### Bestandsstructuur
```
Hypo/
├── index.html      # Hoofdpagina met HTML structuur
├── style.css       # Styling en responsive design
├── script.js       # Berekeningslogica en interactiviteit
└── README.md       # Deze documentatie
```

## 📱 Responsive Design

De calculator past zich automatisch aan aan verschillende schermformaten:

- **Desktop (>968px)**: Twee kolommen layout met zijde-aan-zijde formulier en resultaten
- **Tablet (640-968px)**: Enkele kolom met gestapelde secties
- **Mobile (<640px)**: Geoptimaliseerde layout voor kleine schermen

## 🎨 Design Features

- **Moderne gradient achtergrond**: Paars naar roze verloop
- **Card-based layout**: Duidelijke scheiding van secties
- **Smooth animations**: Subtiele hover effects en transitions
- **Toegankelijke kleuren**: WCAG 2.1 AA compliant
- **Professionele typografie**: System font stack voor optimale leesbaarheid

## 🔒 Privacy & Veiligheid

- **100% client-side**: Alle berekeningen gebeuren in de browser
- **Geen data verzameling**: Geen tracking of analytics
- **Geen server communicatie**: Volledig offline bruikbaar
- **Geen cookies**: Geen opslag van persoonlijke gegevens

## 📊 Voorbeeld Berekening

**Scenario:**
- Hypotheekbedrag: €300.000
- Rente: 4,5%
- Looptijd: 30 jaar
- Eigen inbreng: €0

**Resultaat:**
- Maandelijkse betaling: €1.520,06
- Totale kosten: €547.220,13
- Totale rente: €247.220,13
- LTV: 100%

## 🤝 Bijdragen

Suggesties en verbeteringen zijn welkom! Dit project is ontwikkeld als een praktische tool voor hypotheekberekeningen.

### Mogelijke uitbreidingen
- [ ] Export functie naar PDF
- [ ] Verschillende hypotheekvormen (lineair, aflossingsvrij)
- [ ] NHG kosten berekening
- [ ] Belasting aftrek calculator
- [ ] Vergelijking meerdere scenario's
- [ ] Opslaan van berekeningen
- [ ] Extra kosten (notaris, taxatie, etc.)

## 📝 Licentie

Dit project is beschikbaar onder de MIT License.

## 📞 Contact & Support

Voor vragen of suggesties, open een issue in de repository.

---

**Disclaimer**: Deze calculator is bedoeld voor indicatieve berekeningen. Voor definitieve hypotheekoffertes en financieel advies, raadpleeg altijd een erkend financieel adviseur of hypotheekadviseur.

Gemaakt met ❤️ voor iedereen die een hypotheek wil berekenen.
