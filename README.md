# VIRKE

Kildekode til https://virke-raadgiverfaellesskab.rune-puggaard.chatgpt.site.

Siden er statisk HTML med indlejret CSS. Billede og skrifttyper ligger i `dist/assets/`.

## Lokal visning

Kør fra repositoryets rod:

```sh
python3 -m http.server 8000 --directory dist
```

Åbn http://localhost:8000.

Ved hosting anvendes `dist/` som webrod. Der kræves intet build.

`.openai/hosting.json` indeholder den eksisterende Sites-konfiguration.

Overført fra Sites version 6, kildecommit `278457525bf996d46ceba1f3ae6011b51e3ee988`.
