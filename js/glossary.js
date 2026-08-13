/* =========================================
   Tech Glossary Hub
   Glossary Page JavaScript
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

    renderGlossary(
        glossaryData
    );

    initializeSearch();

    initializeFilters();

    initializeURLParameters();

}


/* =========================================
   Render Category Filters
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
        [
            ...new Set(
                glossaryData.map(
                    (term) =>
                        term.category
                )
            )
        ];


    const buttons = [

        `
        <button
            class="filter-btn active"
            data-category="All"
            type="button"
        >
            All
        </button>
        `,

        ...categories.map(
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

    ];


    filterContainer.innerHTML =
        buttons.join("");

}


/* =========================================
   Short Category Name
========================================= */

function getShortCategoryName(
    category
) {

    const names = {

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
        names[category] ||
        category
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


    container.innerHTML = "";


    /* Result Count */

    if (count) {

        count.textContent =
            terms.length;

    }


    /* No Results */

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


    /* Render Cards */

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
   Create Glossary Card
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
        handleSearch
    );

}


/* =========================================
   Search Handler
========================================= */

function handleSearch() {

    applyGlossaryFilters();

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


            setActiveFilter(
                button
            );


            applyGlossaryFilters();

        }
    );

}


/* =========================================
   Set Active Filter
========================================= */

function setActiveFilter(
    activeButton
) {

    document
        .querySelectorAll(
            ".filter-btn"
        )
        .forEach(
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
   Apply Search + Category
========================================= */

function applyGlossaryFilters() {

    const searchInput =
        document.getElementById(
            "glossarySearch"
        );


    const searchQuery =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const activeFilter =
        document.querySelector(
            ".filter-btn.active"
        );


    const selectedCategory =
        activeFilter
            ? activeFilter.dataset.category
            : "All";


    const filteredTerms =
        glossaryData.filter(
            (term) => {


                /* =========================
                   Category Match
                ========================== */

                const categoryMatch =
                    selectedCategory === "All" ||
                    term.category ===
                        selectedCategory;


                /* =========================
                   Searchable Content
                ========================== */

                const searchableContent =
                    [

                        term.term,

                        term.category,

                        term.definition,

                        term.syntax,

                        term.example

                    ]
                    .join(" ")
                    .toLowerCase();


                /* =========================
                   Search Match
                ========================== */

                const searchMatch =
                    searchQuery === "" ||
                    searchableContent.includes(
                        searchQuery
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            }
        );


    renderGlossary(
        filteredTerms
    );

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


    const searchInput =
        document.getElementById(
            "glossarySearch"
        );


    /* =========================
       Search Parameter
    ========================== */

    if (
        search &&
        searchInput
    ) {

        searchInput.value =
            search;

    }


    /* =========================
       Category Parameter
    ========================== */

    if (category) {

        const filterButton =
            document.querySelector(
                `.filter-btn[data-category="${category}"]`
            );


        if (filterButton) {

            setActiveFilter(
                filterButton
            );

        }

    }


    /* =========================
       Apply Parameters
    ========================== */

    if (
        search ||
        category
    ) {

        applyGlossaryFilters();

    }

}

/* =========================================
   Highlight Search Text
========================================= */

function highlightText(
    text,
    query
) {

    if (!query) {

        return text;

    }


    const escapedQuery =
        query.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );


    const regex =
        new RegExp(
            `(${escapedQuery})`,
            "gi"
        );


    return text.replace(
        regex,
        "<mark>$1</mark>"
    );

}