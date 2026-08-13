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
   Initialize
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


    const categories = [
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
                    ${getShortCategoryName(category)}
                </button>
            `
        )

    ];


    filterContainer.innerHTML =
        buttons.join("");

}


/* =========================================
   Short Category Names
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
   Render Terms
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


    if (count) {

        count.textContent =
            terms.length;

    }


    if (
        terms.length === 0
    ) {

        if (emptyState) {

            emptyState.hidden =
                false;

        }

        return;

    }


    if (emptyState) {

        emptyState.hidden =
            true;

    }


    container.innerHTML =
        terms
            .map(
                (term) =>
                    createTermCard(term)
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
   Search
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

            applyGlossaryFilters();

        }
    );

}


/* =========================================
   Filters
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


            document
                .querySelectorAll(
                    ".filter-btn"
                )
                .forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


            button.classList.add(
                "active"
            );


            applyGlossaryFilters();

        }
    );

}


/* =========================================
   Apply Search + Filter
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


    const activeButton =
        document.querySelector(
            ".filter-btn.active"
        );


    const selectedCategory =
        activeButton
            ? activeButton.dataset.category
            : "All";


    const filteredTerms =
        glossaryData.filter(
            (term) => {


                const matchesCategory =
                    selectedCategory === "All" ||
                    term.category ===
                        selectedCategory;


                const searchableText =
                    `
                    ${term.term}
                    ${term.category}
                    ${term.definition}
                    ${term.syntax}
                    `.toLowerCase();


                const matchesSearch =
                    !searchQuery ||
                    searchableText.includes(
                        searchQuery
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


    if (
        search &&
        searchInput
    ) {

        searchInput.value =
            search;

    }


    if (category) {

        const filterButton =
            document.querySelector(
                `.filter-btn[data-category="${category}"]`
            );


        if (filterButton) {

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


            filterButton.classList.add(
                "active"
            );

        }

    }


    if (
        search ||
        category
    ) {

        applyGlossaryFilters();

    }

}