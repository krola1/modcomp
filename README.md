# modComp

Et lite script for å lage mappestruktur med JSX og modul CSS. Kjør enten som script på din maskin eller via npx.

## Bruk

Sørg for at du er i rotmappen av React-prosjektet, skriv `modcomp` etterfulgt av navn på en eller flere komponenter. VIKTIG: Ikke bruk noen filendendelse (ie .jsx) i komponentnavn. sciptet ordner dette der det trengs, men fjerner ikke duplikat hvis bruker gjør det manuelt i tillegg. 
Planlegger å legge dette til i fremtiden.

**Eksempel:**
```bash
modcomp List Card Form
```

Dette genererer for hver komponent:
- En mappe
- En JSX-fil med komponenten
- En modul CSS-fil
- En `index.js` for eksportering

Alle filer lenkes sammen med imports/exports og fylles med en standardmal. Hvis du kloner prosjektet eller laster det ned lokalt, kan du endre malene etter dine behov i filen `templates.js`.

## Installasjon og kjøring

### Via npx

Du kan kjøre prosjektet via npx med:

npx modcomp <komponentnavn>

```bash
npx --allow-git=all github:krola1/modcomp <komponentnavn>
```

---

*Readme laget med Copilot*
