---
name: MAINOVI
description: Global Care Supply. B2B-Großhandel und Export, ruhig, präzise, CI-treu.
colors:
  granite: "#405C58"
  granite-deep: "#344B48"
  granite-ink: "#2A3C39"
  porcelain: "#F6F5EF"
  porcelain-shade: "#ECEBE3"
  muted-teal: "#A8BFBD"
  teal-soft: "#D3DFDD"
  ink: "#1D2826"
  ink-soft: "#4A5A57"
  on-granite-soft: "#C9D6D4"
  line: "#CFD6D3"
  error: "#9B2C1F"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(2.3rem, 3.7vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(1.35rem, 1.8vw, 1.65rem)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  lead:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  none: "0px"
  field: "6px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(88px, 11vw, 160px)"
  wrap: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.granite}"
    textColor: "{colors.porcelain}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.granite-ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.granite}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "50px"
  button-line-hover:
    backgroundColor: "{colors.granite}"
    textColor: "{colors.porcelain}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
    height: "50px"
  icon-ring:
    textColor: "{colors.granite}"
    rounded: "{rounded.circle}"
    size: "52px"
---

# Design System: MAINOVI

## Overview

Ein Horizont, kein Katalog. MAINOVI tritt als ruhiger, präziser Exportpartner auf: großformatige Fotografie aus Hafen, Lager und Laderampe, Porcelain als Grund, Granite als Fläche, die ganze Bereiche besetzt. Die Marke spricht in einer hochkontrastigen Didone (CI: Serena Bold, im Web Bodoni Moda), alles Arbeitende in Montserrat. Feine 1px-Linien gliedern, Outline-Icons im Kreis zitieren die Ikonografie der Brand Guidelines.

Quelle der Farben und Schriften: MAINOVI Brand Guidelines (Granite, Porcelain, Muted Teal, Black; Serena Bold + Montserrat; Bodoni Moda als freigegebener Ersatz).

## Colors

### Primary
Granite ist die Markenfarbe. Sie besetzt ganze Flächen (Mengen-Band, Footer) und trägt jede primäre Aktion. Granite-Ink ist der Hover-Ton und die Farbe großer Headlines auf Porcelain.

### Secondary
Muted Teal erscheint nur als feine Linie: Icon-Ringe, Unterstreichungen von Links, Scrollbar. Teal-Soft hinterlegt Platzhalter und offene Inhalte.

### Neutral
Porcelain ist der Grund der Seite, Porcelain-Shade die ruhige Zweitfläche (Anfragebereich, Bildbühne). Ink und Ink-Soft sind aus Granite abgeleitet, nie neutrales Grau. Auf Granite steht Text in Porcelain bzw. On-Granite-Soft.

### Named Rules
- **Fläche statt Akzent:** Granite kommt als Feld, das eine ganze Region besitzt, nicht als verstreuter Farbtupfer.
- **Ein Aktionston:** Jede primäre Aktion ist Granite. Keine zweite Akzentfarbe.

## Typography

Display, Headline und Title in Bodoni Moda 600 mit -0.01em Laufweite und ausbalancierten Umbrüchen; Hero-Headline maximal zwei Zeilen. Fließtext Montserrat 400, Zeilenhöhe 1.7, Lead-Texte in Ink-Soft auf max. 46ch. Labels und Buttons Montserrat 600.

### Hierarchy
display (Hero) > headline (Sektionen) > title (Sortiment, Schritte) > lead > body > label.

### Named Rules
- **Keine Kicker:** Über Headlines steht kein Label. Die Headline trägt sich selbst.
- **Serifen nur für die Marke:** Die Didone ist für Headlines und Markennamen reserviert, nie für Formulare oder Fließtext.

## Layout

Inhaltsbreite 1320px mit fluidem Seitenrand (gutter) und großzügigem Sektionsrhythmus (section). Kompositionen wechseln zwischen Vollbild-Foto mit Panel (Hero), Index plus Bildbühne (Sortiment), geteiltem Granite-Band (Mengen), Bild plus Faktenliste (Export) und Text plus Formular (Anfrage). Unter 900px stapelt alles einspaltig, die Navigation wird zum Ausklappmenü.

## Elevation & Depth

Flach. Tiefe entsteht durch Flächenwechsel (Porcelain, Porcelain-Shade, Granite) und Fotografie. Einziger Schatten: ein weicher, granitgetönter Schatten unter dem Header, sobald gescrollt wird.

## Shapes

Bilder und Flächen eckig (0px). Interaktive Elemente als Pille (Buttons, Sprachumschalter). Eingabefelder 6px. Icons immer im Kreis.

## Components

### Buttons
Primär: Granite gefüllt, Porcelain-Text, Pille, 50px hoch, Pfeil rückt beim Hover 3px vor. Sekundär: 1px Granite-Linie, füllt sich beim Hover. Ein Label pro Absicht: "Anfrage senden".

### Cards / Containers
Keine Karten-Raster. Inhalte gliedern sich über 1px-Linien (Line bzw. Porcelain mit 22% Deckkraft auf Granite).

### Inputs / Fields
Label über dem Feld, Fehlertext darunter in Error-Rot, Fokus mit Granite-Rand und 3px Granite-Halo bei 18% Deckkraft.

### Navigation
Porcelain-Leiste, Logomark plus Wortmarke links, Links mit wachsender 1px-Unterstreichung, DE/EN als Pillen, CTA rechts.

### Sortiment-Index (Signature)
Liste der Kategorien mit Icon-Ring, Name und Kurztext; Hover oder Fokus tauscht das große Bild der Bühne per Clip-Reveal von rechts. Mobil zeigt jede Kategorie ihr eigenes Bild.

## Do's and Don'ts

### Do:
- Logo nur in Granite auf Porcelain oder Porcelain auf Granite verwenden, mit Freiraum, nie auf unruhigem Bild.
- Offene Inhalte sichtbar als Platzhalter kennzeichnen, statt Fakten zu erfinden.
- Bewegung nur mit `prefers-reduced-motion` respektierend einsetzen.

### Don't:
- Keine erfundenen Kennzahlen (Länder, Kunden, Marken).
- Keine vier gleichen Kategoriekarten, keine Statistik-Leisten, keine Kicker über Headlines.
- Keine zweite Akzentfarbe, keine Verläufe, kein Glas-Effekt.
