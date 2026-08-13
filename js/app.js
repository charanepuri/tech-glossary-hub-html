/* =========================================
   Tech Glossary Hub
   Application JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeGlossaryData();

    initializeFeaturedTerms();

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


    function handleSearch() {

        const searchTerm =
            searchInput.value.trim();


        if (!searchTerm) {

            searchInput.focus();

            return;

        }


        console.log(
            `Searching Tech Glossary Hub for: ${searchTerm}`
        );

    }


    searchButton.addEventListener(
        "click",
        handleSearch
    );


    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                handleSearch();

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


function initializeGlossaryData() {

    if (typeof glossaryData === "undefined") {

        console.error(
            "Glossary data could not be loaded."
        );

        return;

    }


    updateTotalTerms();

    updateCategoryCounts();

}

function updateTotalTerms() {

    const totalTerms =
        document.getElementById("totalTerms");


    if (!totalTerms) {
        return;
    }


    totalTerms.textContent =
        glossaryData.length + "+";

}

function updateCategoryCounts() {

    const categoryCards =
        document.querySelectorAll(
            ".category-card[data-category]"
        );


    categoryCards.forEach((card) => {

        const category =
            card.dataset.category;


        const count =
            glossaryData.filter(
                (item) =>
                    item.category === category
            ).length;


        const countElement =
            card.querySelector(".category-count");


        if (countElement) {

            countElement.textContent =
                `${count} Terms`;

        }

    });

}

function initializeFeaturedTerms() {

    const container =
        document.getElementById("featuredTerms");


    if (!container) {
        return;
    }


    const featuredIds = [
        "html",
        "git",
        "artificial-intelligence"
    ];


    const featuredTerms =
        featuredIds
            .map(
                (id) =>
                    glossaryData.find(
                        (term) => term.id === id
                    )
            )
            .filter(Boolean);


    container.innerHTML =
        featuredTerms
            .map(
                (term) => createFeaturedTermCard(term)
            )
            .join("");

}

function createFeaturedTermCard(term) {

    return `
        <div class="col-md-6 col-lg-4">

            <div class="term-preview-card">

                <div class="term-icon">

                    <i class="bi bi-code-square"></i>

                </div>


                <span class="term-category">

                    ${term.category}

                </span>


                <h3>

                    ${term.term}

                </h3>


                <p>

                    ${term.definition}

                </p>


                <a
                    href="#"
                    data-term-id="${term.id}"
                >

                    View Term

                    <i class="bi bi-arrow-right"></i>

                </a>

            </div>

        </div>
    `;

}