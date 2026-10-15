# FORMA — strona oferty (do sprzedaży usług WWW)

Jednostronicowa witryna pod freelancing / małe studio: pakiety, proces, realizacje, formularz.

## Uruchomienie lokalne

Otwórz `index.html` w przeglądarce albo:

```bash
npx serve .
```

## Przed publikacją — zamień placeholdery

W `index.html` wyszukaj i podmień:

- `[Twoje imię]`
- `kontakt@twojadomena.pl`
- `+48 123 456 789`
- opis realizacji Domel (link live, jeśli jest)
- nazwa marki `FORMA` (opcjonalnie)

W `js/main.js`:

- `FORMSPREE_ID` — ID z [formspree.io](https://formspree.io) (darmowy plan), żeby formularz szedł na mail bez programu pocztowego

## Hosting (darmowy / tani)

- Cloudflare Pages / Netlify / GitHub Pages — wrzuć cały folder `studio-www`
- Albo zwykły hosting z FTP (home.pl, cyberFolks itd.)

## Licencja użycia

To Twoja strona sprzedażowa. Możesz zmieniać teksty, kolory i pakiety pod siebie.
