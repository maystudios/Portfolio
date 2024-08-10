function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.querySelectorAll(
    'input[name="language-switch2"]'
  );
  let translations = {};

  // Funktion zum Laden der Übersetzungen
  function loadTranslations(callback) {
    fetch("translations.json")
      .then((response) => response.json())
      .then((data) => {
        translations = data;
        callback();
      });
  }

  // Funktion zum Anwenden der Übersetzungen
  function applyTranslations(language) {
    // Profil Abschnitt
    document.querySelector(".section__text__p1").textContent =
      translations[language].greeting;
    document.querySelector(".title").textContent = translations[language].title;
    document.querySelector(".section__text__p2").textContent =
      translations[language].subtitle;
    document.querySelector(".btn-container button:nth-child(1)").textContent =
      translations[language].download_cv;
    document.querySelector(".btn-container button:nth-child(2)").textContent =
      translations[language].contact_info;

    // About Me Abschnitt
    document.querySelector("#about .section__text__p1").textContent =
      translations[language].get_to_know;
    document.querySelector("#about .title").textContent =
      translations[language].about_me;
    document.querySelector("#about strong").textContent =
      translations[language].background_intro;
    const aboutParagraphs = document.querySelectorAll(
      "#about .text-container p"
    );
    aboutParagraphs[0].textContent = translations[language].background_text;
    aboutParagraphs[1].textContent =
      translations[language].background_paragraph;

    // Experience Abschnitt
    document.querySelector("#experience .section__text__p1").textContent =
      translations[language].explore_my;
    document.querySelector("#experience .title").textContent =
      translations[language].experience;

    // Projekte Abschnitt
    document.querySelector("#projects .section__text__p1").textContent =
      translations[language].browse_recent;
    document.querySelector("#projects .title").textContent =
      translations[language].projects;

    const projectTitles = document.querySelectorAll(
      "#projects .experience-sub-title.project-title"
    );
    projectTitles[0].textContent = translations[language].gemma_title;
    projectTitles[1].textContent = translations[language].mic1_title;
    projectTitles[2].textContent = translations[language].thesis_title;

    const projectButtons = document.querySelectorAll("#projects .project-btn");
    projectButtons[0].textContent = translations[language].gemma_button;
    projectButtons[1].textContent = translations[language].mic1_compiler_button;
    projectButtons[2].textContent = translations[language].mic1_rebuild_button;
    projectButtons[3].textContent = translations[language].thesis_button;

    // Kontakt Abschnitt
    document.querySelector("#contact .section__text__p1").textContent =
      translations[language].get_in_touch;
    document.querySelector("#contact .title").textContent =
      translations[language].contact_me;
    document.querySelector(".contact-info-container p a").textContent =
      translations[language].contact_email;
    document.querySelector(
      ".contact-info-container:nth-child(2) p a"
    ).textContent = translations[language].contact_linkedin;

    // Footer Abschnitt
    document.querySelector("footer p").textContent =
      translations[language].footer;
  }

  // Event Listener für den Sprachwechsel
  languageSwitcher.forEach((switcher) => {
    switcher.addEventListener("change", function () {
      const selectedLanguage = this.id === "language2-1" ? "de" : "en";
      applyTranslations(selectedLanguage);
    });
  });

  // Übersetzungen laden und anwenden
  loadTranslations(function () {
    const initialLanguage =
      document.querySelector('input[name="language-switch2"]:checked').id ===
      "language2-1"
        ? "de"
        : "en";
    applyTranslations(initialLanguage);
  });
});
