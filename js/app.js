/* =========================================
   Tech Glossary Hub
   Application JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Tech Glossary Hub initialized successfully.");

    initializeThemeToggle();
    initializeSearchButton();
    initializeExploreButton();

});


/* =========================================
   Theme Toggle
========================================= */

function initializeThemeToggle() {

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            icon.className = "bi bi-sun-fill";

        } else {

            icon.className = "bi bi-moon-fill";

        }

    });

}


/* =========================================
   Search Button
========================================= */

function initializeSearchButton() {

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

            alert("Please enter a technology term to search.");

            return;
        }

        console.log(
            `Searching for: ${searchTerm}`
        );

    });

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

        alert(
            "Glossary page will be available in a later phase."
        );

    });

}