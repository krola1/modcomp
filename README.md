# modComp

Et lite script for å lage mappestruktur med jsx og modulcss, kjør enten som script på din maskin eller via npx.

Bruk: sørg for at du er i rootmappen av react prosjektet, skriv modcomp etterfulgt av navn på en eller flere komponenter. 

ie: "modcomp List Card Form"

da genereres det for hver av komponentene, en folder, en jsx fil med komponeten, en modulue css som hører til og en index.jsx for exportering

alle linkes sammen med imports/exports og fylles med en standard template. hvis du cloner prosjektet eller laster end lokalt kan du endre templatene til ditt brukn i filen templates.js



## Kjør via npx

Du kan kjøre prosjektet via nxp med:

```bash
npx --allow-git=all github:krola1/modcomp <komponentnavn>
```

Mer innhold kommer snart.
