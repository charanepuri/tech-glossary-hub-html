/* =========================================
   Tech Glossary Hub
   Application JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();
    initializeSearch();
    initializeExploreButton();

});


/* =========================================
   Theme
========================================= */

function initializeTheme() {

    const themeToggle =
        document.getElementById("themeToggle");

    if (!themeToggle) {
        return;
    }


    const savedTheme =
        localStorage.getItem("tech-glossary-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeIcon();


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const currentTheme =
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";


        localStorage.setItem(
            "tech-glossary-theme",
            currentTheme
        );


        updateThemeIcon();

    });

}


/* =========================================
   Theme Icon
========================================= */

function updateThemeIcon() {

    const themeToggle =
        document.getElementById("themeToggle");

    if (!themeToggle) {
        return;
    }


    const icon =
        themeToggle.querySelector("i");


    if (
        document.body.classList.contains("dark-mode")
    ) {

        icon.className = "bi bi-sun-fill";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        icon.className = "bi bi-moon-fill";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


/* =========================================
   Search
========================================= */

function initializeSearch() {

    const searchButton =
        document.getElementById("searchButton");

    const searchInput =
        document.getElementById("searchInput");


    if (!searchButton || !searchInput) {
        return;
    }


    searchButton.addEventListener("click", () => {

        const searchTerm =
            searchInput.value.trim();


        if (!searchTerm) {

            searchInput.focus();

            return;

        }


        console.log(
            "Search term:",
            searchTerm
        );

    });


    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                searchButton.click();

            }

        }
    );

}


/* =========================================
   Explore Glossary
========================================= */

function initializeExploreButton() {

    const exploreButton =
        document.getElementById("exploreGlossary");


    if (!exploreButton) {
        return;
    }


    exploreButton.addEventListener("click", () => {

        console.log(
            "Glossary navigation will be implemented in Phase 5."
        );

    });

}