/* =========================================
   Tech Glossary Hub
   Glossary Page JavaScript
========================================= */


/* =========================================
   Global State
========================================= */

let currentCategory = "All";

let currentSearch = "";


/* =========================================
   DOM Ready
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeGlossaryPage();

    }
);


/* =========================================
   Initialize Glossary Page
========================================= */

function initializeGlossaryPage() {

    if (
        typeof glossaryData === "undefined"
    ) {

        console.error(
            "Glossary data could not be loaded."
        );

        return;

    }


    renderFilters();

    initializeSearch();

    initializeFilters();

    initializeURLParameters();

    applyGlossaryFilters();

}


/* =========================================
   Get Categories
========================================= */

function getGlossaryCategories() {

    return [
        ...new Set(
            glossaryData.map(
                (term) =>
                    term.category
            )
        )
    ];

}


/* =========================================
   Render Filters
========================================= */

function renderFilters() {

    const filterContainer =
        document.getElementById(
            "glossaryFilter"
        );


    if (!filterContainer) {

        return;

    }


    const categories =
        getGlossaryCategories();


    const allButton = `

        <button
            class="filter-btn active"
            data-category="All"
            type="button"
        >

            All

        </button>

    `;


    const categoryButtons =
        categories
            .map(
                (category) => `

                    <button
                        class="filter-btn"
                        data-category="${category}"
                        type="button"
                    >

                        ${getShortCategoryName(
                            category
                        )}

                    </button>

                `
            )
            .join("");


    filterContainer.innerHTML =
        allButton +
        categoryButtons;

}


/* =========================================
   Short Category Names
========================================= */

function getShortCategoryName(
    category
) {

    const categoryNames = {

        "Web Development & Design":
            "Web Development",

        "Software Engineering":
            "Software Engineering",

        "Data Science & AI":
            "Data Science & AI",

        "Cybersecurity":
            "Cybersecurity",

        "Cloud & Networking":
            "Cloud & Networking"

    };


    return (
        categoryNames[category] ||
        category
    );

}


/* =========================================
   Search Initialization
========================================= */

function initializeSearch() {

    const searchInput =
        document.getElementById(
            "glossarySearch"
        );


    if (!searchInput) {

        return;

    }


    searchInput.addEventListener(
        "input",
        () => {

            currentSearch =
                searchInput.value
                    .trim()
                    .toLowerCase();


            applyGlossaryFilters();

        }
    );

}


/* =========================================
   Filter Initialization
========================================= */

function initializeFilters() {

    const filterContainer =
        document.getElementById(
            "glossaryFilter"
        );


    if (!filterContainer) {

        return;

    }


    filterContainer.addEventListener(
        "click",
        (event) => {


            const button =
                event.target.closest(
                    ".filter-btn"
                );


            if (!button) {

                return;

            }


            currentCategory =
                button.dataset.category;


            updateActiveFilter(
                button
            );


            applyGlossaryFilters();

        }
    );

}


/* =========================================
   Active Filter
========================================= */

function updateActiveFilter(
    activeButton
) {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    buttons.forEach(
        (button) => {

            button.classList.remove(
                "active"
            );

        }
    );


    activeButton.classList.add(
        "active"
    );

}


/* =========================================
   Apply Filters
========================================= */

function applyGlossaryFilters() {

    const filteredTerms =
        glossaryData.filter(
            (term) => {


                /* =========================
                   Category
                ========================== */

                const matchesCategory =
                    currentCategory === "All" ||
                    term.category ===
                        currentCategory;


                /* =========================
                   Search
                ========================== */

                const searchableText =
                    [

                        term.term,

                        term.category,

                        term.definition,

                        term.syntax,

                        term.example

                    ]
                    .join(" ")
                    .toLowerCase();


                const matchesSearch =
                    currentSearch === "" ||
                    searchableText.includes(
                        currentSearch
                    );


                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );


    renderGlossary(
        filteredTerms
    );

}


/* =========================================
   Render Glossary
========================================= */

function renderGlossary(
    terms
) {

    const container =
        document.getElementById(
            "glossaryContainer"
        );


    const emptyState =
        document.getElementById(
            "glossaryEmpty"
        );


    const count =
        document.getElementById(
            "glossaryCount"
        );


    if (!container) {

        return;

    }


    /* Clear */

    container.innerHTML = "";


    /* Update Count */

    if (count) {

        count.textContent =
            terms.length;

    }


    /* Empty State */

    if (
        terms.length === 0
    ) {

        if (emptyState) {

            emptyState.hidden =
                false;

        }

        return;

    }


    /* Hide Empty State */

    if (emptyState) {

        emptyState.hidden =
            true;

    }


    /* Render */

    container.innerHTML =
        terms
            .map(
                (term) =>
                    createTermCard(
                        term
                    )
            )
            .join("");

}


/* =========================================
   Create Term Card
========================================= */

function createTermCard(
    term
) {

    return `

        <div
            class="col-md-6 col-xl-4"
        >

            <article
                class="glossary-card"
                data-term-id="${term.id}"
            >


                <div
                    class="glossary-card-top"
                >


                    <span
                        class="term-category"
                    >

                        ${term.category}

                    </span>


                    <span
                        class="term-number"
                    >

                        #${term.id}

                    </span>


                </div>


                <h2>

                    ${term.term}

                </h2>


                <p>

                    ${term.definition}

                </p>


                <div
                    class="term-syntax"
                >


                    <span>
                        Syntax
                    </span>


                    <code>

                        ${term.syntax}

                    </code>


                </div>


                <div
                    class="glossary-card-footer"
                >


                    <a
                        href="term.html?id=${term.id}"
                        class="view-term"
                    >

                        View Details

                        <i
                            class="bi bi-arrow-right"
                        ></i>

                    </a>


                </div>


            </article>

        </div>

    `;

}


/* =========================================
   URL Parameters
========================================= */

function initializeURLParameters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const search =
        params.get(
            "search"
        );


    const category =
        params.get(
            "category"
        );


    /* =========================
       Search Parameter
    ========================== */

    if (search) {

        currentSearch =
            search
                .trim()
                .toLowerCase();


        const searchInput =
            document.getElementById(
                "glossarySearch"
            );


        if (searchInput) {

            searchInput.value =
                search;

        }

    }


    /* =========================
       Category Parameter
    ========================== */

    if (category) {

        const validCategory =
            glossaryData.some(
                (term) =>
                    term.category ===
                    category
            );


        if (validCategory) {

            currentCategory =
                category;

        }

    }


    updateActiveFilterFromState();

}


/* =========================================
   Update Filter From State
========================================= */

function updateActiveFilterFromState() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );


    buttons.forEach(
        (button) => {

            const isActive =
                button.dataset.category ===
                currentCategory;


            button.classList.toggle(
                "active",
                isActive
            );

        }
    );

}