# Instrukcja: Uruchomienie stron klientów na Cloudflare Pages + subdomeny

Kompletny przewodnik krok po kroku – od zakupu domeny do pierwszej działającej strony klienta.

---

## Krok 1: Kup domenę

1. Wejdź na jedną z tych stron:
   - [AfterMarket.pl](https://www.aftermarket.pl)
   - [OVH](https://www.ovhcloud.com/pl/domains/)
   - [home.pl](https://home.pl)
   - [Nazwa.pl](https://www.nazwa.pl)

2. Sprawdź dostępność nazwy, np.:
   - `stronyagd.pl`
   - `agdstrony.pl`
   - `stronaagd.pl`
   - `twojeagd.pl`

3. Kup domenę na **1 rok** (ok. 50–80 zł).

---

## Krok 2: Załóż darmowe konto Cloudflare

1. Wejdź na [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Zarejestruj się (najlepiej firmowym mailem).
3. Potwierdź adres e-mail.

---

## Krok 3: Przenieś domenę na Cloudflare

1. W panelu Cloudflare kliknij **Add a site**.
2. Wpisz swoją domenę (np. `stronyagd.pl`) → **Add site**.
3. Wybierz plan **Free** → Continue.
4. Cloudflare zeskanuje domenę i pokaże rekordy DNS.
5. Kliknij **Continue**.
6. Cloudflare da Ci **dwa nameservery** (np. `ada.ns.cloudflare.com` i `bob.ns.cloudflare.com`).
7. Idź do panelu, gdzie kupiłeś domenę, i **zmień nameservery** na te od Cloudflare.
8. Poczekaj 15–60 minut (czasem do kilku godzin), aż status domeny w Cloudflare zmieni się na **Active**.

---

## Krok 4: Przygotuj pierwszą stronę klienta

1. Weź jeden z przygotowanych demo (np. `demo-agd-premium-poznan`) albo wyczyszczony szablon.
2. Spersonalizuj dane firmy klienta (nazwa, adres, telefony, logo).
3. Upewnij się, że wszystkie pliki są w jednym folderze (index.html, style.css, images/ itd.).

---

## Krok 5: Wrzuć stronę na Cloudflare Pages

**Najprostszy sposób (przeciągnij i upuść):**

1. W panelu Cloudflare wejdź w **Workers & Pages**.
2. Kliknij **Create application** → zakładka **Pages**.
3. Wybierz **Upload assets**.
4. Nadaj projektowi nazwę, np. `agd-premium-poznan`.
5. Przeciągnij cały folder ze stroną klienta (lub spakowany ZIP) i upuść.
6. Kliknij **Deploy site**.

Po chwili dostaniesz adres tymczasowy typu:  
`agd-premium-poznan.pages.dev`

---

## Krok 6: Podłącz ładną subdomenę

1. Wejdź w swój projekt Pages → zakładka **Custom domains**.
2. Kliknij **Set up a domain**.
3. Wpisz subdomenę, np.:
   - `premium.stronyagd.pl`
   - `agd-premium.stronyagd.pl`
4. Kliknij **Continue**.

Ponieważ domena jest już na Cloudflare, system sam utworzy odpowiedni rekord CNAME i automatycznie wystawi SSL (kłódka HTTPS).

Po 1–2 minutach strona powinna działać pod adresem:  
**https://premium.stronyagd.pl**

---

## Krok 7: Jak dodawać kolejnych klientów

Dla każdego nowego klienta powtarzasz tylko:

1. Tworzysz nowy projekt w **Pages** (Upload assets).
2. Wrzuć spersonalizowaną stronę.
3. W **Custom domains** dodajesz nową subdomenę, np. `serwis-max.stronyagd.pl`.

Wszystko na jednym koncie Cloudflare, jeden DNS, jeden darmowy SSL dla wszystkich subdomen.

---

## Przydatne wskazówki

- Nazwy projektów w Pages najlepiej trzymać po angielsku bez polskich znaków (np. `serwis-max-krakow`).
- Subdomeny możesz nazywać po polsku (Cloudflare sobie radzi).
- Jak klient przestanie płacić – wystarczy usunąć Custom domain albo cały projekt Pages.
- Logo i zdjęcia – staraj się kompresować (mniejsze pliki = szybsza strona).

---

## Szybka checklista przy nowym kliencie

- [ ] Spersonalizowałem stronę (dane + logo)
- [ ] Utworzyłem nowy projekt w Cloudflare Pages
- [ ] Wrzułem pliki (Upload assets)
- [ ] Dodałem Custom domain (subdomenę)
- [ ] Sprawdziłem, czy strona działa na HTTPS
- [ ] Wysłałem klientowi link do strony

---

*Dokument wygenerowany na potrzeby sprzedaży subskrypcji stron AGD.*
