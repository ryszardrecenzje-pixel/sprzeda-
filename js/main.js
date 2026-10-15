(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.getElementById("menuToggle");
  const mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      mobile.classList.toggle("open");
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.classList.remove("open");
      });
    });
  }

  document.querySelectorAll("[data-package]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const pack = btn.getAttribute("data-package");
      const select = document.getElementById("packageSelect");
      if (select && pack) select.value = pack;
    });
  });

  const form = document.getElementById("leadForm");
  const success = document.getElementById("formSuccess");

  // Opcjonalnie: wklej ID z formspree.io → formularz pójdzie na mail bez mailto
  const FORMSPREE_ID = ""https://formspree.io/f/mrpglqgz"

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const pack = (data.get("package") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      if (!name || !email || !message) {
        form.reportValidity();
        return;
      }

      const body = [
        "Nowe zapytanie ze strony FORMA",
        "",
        "Imię / firma: " + name,
        "E-mail: " + email,
        "Telefon: " + phone,
        "Pakiet: " + (pack || "—"),
        "",
        message,
      ].join("\n");

      if (FORMSPREE_ID) {
        try {
          const res = await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: data,
          });
          if (res.ok) {
            form.reset();
            if (success) {
              success.textContent = "Dziękuję! Wiadomość wysłana — odezwę się mailowo.";
              success.classList.add("show");
            }
            return;
          }
        } catch (err) {
          /* fallback mailto */
        }
      }

      const mailto =
        "mailto:kontakt@twojadomena.pl" +
        "?subject=" +
        encodeURIComponent("Wycena strony — " + name) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = mailto;
      if (success) success.classList.add("show");
    });
  }
})();
