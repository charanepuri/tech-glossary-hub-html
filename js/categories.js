/* =========================================
   Tech Glossary Hub
   Categories Page JavaScript
========================================= */


/* =========================================
   Category Configuration
========================================= */

const categoriesConfig = {

    "Web Development & Design": {

        icon: "bi-globe2",

        shortName:
            "Web Development",

        description:
            "Explore the technologies and concepts used to build modern websites and web applications.",

        colorClass:
            "category-web"

    },


    "Software Engineering": {

        icon: "bi-code-square",

        shortName:
            "Software Engineering",

        description:
            "Learn software development practices, version control, testing, methodologies, and engineering principles.",

        colorClass:
            "category-software"

    },


    "Data Science & AI": {

        icon: "bi-robot",

        shortName:
            "Data Science & AI",

        description:
            "Discover artificial intelligence, machine learning, neural networks, datasets, NLP, and data science concepts.",

        colorClass:
            "category-ai"

    },


    "Cybersecurity": {

        icon: "bi-shield-lock",

        shortName:
            "Cybersecurity",

        description:
            "Understand the concepts and technologies used to protect applications, systems, networks, and data.",

        colorClass:
            "category-security"

    },


    "Cloud & Networking": {

        icon: "bi-cloud",

        shortName:
            "Cloud & Networking",

        description:
            "Explore cloud computing, containers, networking, DNS, IP addresses, and modern infrastructure concepts.",

        colorClass:
            "category-cloud"

    }

};


/* =========================================
   DOM Ready
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCategoriesPage();

    }
);


/* =========================================
   Initialize
========================================= */

function initializeCategoriesPage() {

    if (
        typeof glossaryData === "undefined"
    ) {

        console.error(
            "Glossary data could not be loaded."
        );

        return;

    }


    renderCategoryStatistics();

    renderCategoriesPage();

}


/* =========================================
   Get Categories
========================================= */

function getCategoriesFromData() {

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
   Render Statistics
========================================= */

function renderCategoryStatistics() {

    const container =
        document.getElementById(
            "categoryPageStats"
        );


    if (!container) {

        return;

    }


    const categories =
        getCategoriesFromData();


    const totalTerms =
        glossaryData.length;


    container.innerHTML = `

        <div class="category-stat">

            <span class="category-stat-icon">

                <i class="bi bi-grid-3x3-gap"></i>

            </span>


            <div>

                <strong>
                    ${categories.length}
                </strong>

                <span>
                    Categories
                </span>

            </div>

        </div>


        <div class="category-stat">

            <span class="category-stat-icon">

                <i class="bi bi-book"></i>

            </span>


            <div>

                <strong>
                    ${totalTerms}
                </strong>

                <span>
                    Technology Terms
                </span>

            </div>

        </div>


        <div class="category-stat">

            <span class="category-stat-icon">

                <i class="bi bi-bar-chart"></i>

            </span>


            <div>

                <strong>
                    15
                </strong>

                <span>
                    Terms Per Category
                </span>

            </div>

        </div>

    `;

}


/* =========================================
   Render Categories
========================================= */

function renderCategoriesPage() {

    const container =
        document.getElementById(
            "categoriesPageContainer"
        );


    if (!container) {

        return;

    }


    const categories =
        getCategoriesFromData();


    container.innerHTML =
        categories
            .map(
                (
                    category,
                    index
                ) =>
                    createCategoryPageCard(
                        category,
                        index
                    )
            )
            .join("");

}


/* =========================================
   Create Category Card
========================================= */

function createCategoryPageCard(
    category,
    index
) {

    const config =
        categoriesConfig[category];


    const terms =
        glossaryData.filter(
            (term) =>
                term.category ===
                category
        );


    const number =
        String(index + 1)
            .padStart(2, "0");


    return `

        <div
            class="col-md-6"
        >

            <article
                class="
                    category-page-card
                    ${config.colorClass}
                "
            >


                <!-- Number -->

                <div
                    class="category-page-number"
                >

                    ${number}

                </div>


                <!-- Icon -->

                <div
                    class="category-page-icon"
                >

                    <i
                        class="bi ${config.icon}"
                    ></i>

                </div>


                <!-- Content -->

                <div
                    class="category-page-content"
                >


                    <span
                        class="category-page-label"
                    >

                        CATEGORY ${number}

                    </span>


                    <h2>

                        ${category}

                    </h2>


                    <p>

                        ${config.description}

                    </p>


                    <!-- Term Preview -->

                    <div
                        class="category-term-preview"
                    >


                        <span>
                            Included Terms
                        </span>


                        <div
                            class="category-term-list"
                        >

                            ${createTermPreview(
                                terms
                            )}

                        </div>


                    </div>


                    <!-- Footer -->

                    <div
                        class="category-page-footer"
                    >


                        <span
                            class="category-term-count"
                        >

                            <i
                                class="bi bi-book"
                            ></i>

                            ${terms.length}
                            Terms

                        </span>


                        <a
                            href="glossary.html?category=${encodeURIComponent(category)}"
                            class="category-explore-btn"
                        >

                            Explore Category

                            <i
                                class="bi bi-arrow-right"
                            ></i>

                        </a>


                    </div>


                </div>


            </article>

        </div>

    `;

}


/* =========================================
   Term Preview
========================================= */

function createTermPreview(
    terms
) {

    const previewTerms =
        terms.slice(
            0,
            5
        );


    return previewTerms
        .map(
            (term) => `

                <span>

                    ${term.term}

                </span>

            `
        )
        .join("");

}