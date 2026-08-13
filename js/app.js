/* =========================================
   Tech Glossary Hub
   Main Application JavaScript
========================================= */


/* =========================================
   DOM Ready
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeTheme();

        initializeHomePage();

        initializeHomeSearch();

    }
);


/* =========================================
   Home Page Initialization
========================================= */

function initializeHomePage() {

    if (
        typeof glossaryData === "undefined"
    ) {

        return;

    }


    updateStatistics();

    renderCategories();

    renderFeaturedTerms();

}


/* =========================================
   Statistics
========================================= */

function updateStatistics() {

    const totalTermsElement =
        document.getElementById(
            "totalTerms"
        );


    const totalCategoriesElement =
        document.getElementById(
            "totalCategories"
        );


    if (
        !totalTermsElement ||
        !totalCategoriesElement ||
        typeof glossaryData === "undefined"
    ) {

        return;

    }


    const categories =
        getCategories();


    totalTermsElement.textContent =
        `${glossaryData.length}+`;


    totalCategoriesElement.textContent =
        categories.length;

}


/* =========================================
   Get Categories
========================================= */

function getCategories() {

    return [
        ...new Set(
            glossaryData.map(
                (item) =>
                    item.category
            )
        )
    ];

}


/* =========================================
   Category Configuration
========================================= */

const categoryConfig = {

    "Web Development & Design": {

        icon: "bi-globe2",

        description:
            "Learn HTML, CSS, JavaScript, responsive design, APIs, and essential web concepts."

    },


    "Software Engineering": {

        icon: "bi-code-square",

        description:
            "Understand Git, Agile, testing, CI/CD, software development, and engineering practices."

    },


    "Data Science & AI": {

        icon: "bi-robot",

        description:
            "Explore machine learning, neural networks, datasets, NLP, AI, and data science concepts."

    },


    "Cybersecurity": {

        icon: "bi-shield-lock",

        description:
            "Learn authentication, authorization, encryption, malware, phishing, firewalls, and security concepts."

    },


    "Cloud & Networking": {

        icon: "bi-cloud",

        description:
            "Explore cloud computing, Docker, Kubernetes, DNS, IP addresses, networking, and cloud platforms."

    }

};


/* =========================================
   Render Categories
========================================= */

function renderCategories() {

    const container =
        document.getElementById(
            "categoryContainer"
        );


    if (!container) {

        return;

    }


    const categories =
        getCategories();


    container.innerHTML =
        categories
            .map(
                (
                    category,
                    index
                ) =>
                    createCategoryCard(
                        category,
                        index
                    )
            )
            .join("");

}


/* =========================================
   Create Category Card
========================================= */

function createCategoryCard(
    category,
    index
) {

    const config =
        categoryConfig[category];


    const count =
        glossaryData.filter(
            (item) =>
                item.category === category
        ).length;


    const number =
        String(index + 1)
            .padStart(2, "0");


    const columnClass =
        index < 3
            ? "col-md-6 col-lg-4"
            : "col-md-6 col-lg-6";


    return `

        <div class="${columnClass}">

            <div
                class="category-card"
                data-category="${category}"
            >

                <div class="category-number">

                    ${number}

                </div>


                <div class="category-icon">

                    <i
                        class="bi ${config.icon}"
                    ></i>

                </div>


                <h3>

                    ${category}

                </h3>


                <p>

                    ${config.description}

                </p>


                <div class="category-footer">


                    <span>

                        ${count} Terms

                    </span>


                    <a
                        href="pages/glossary.html?category=${encodeURIComponent(category)}"
                        aria-label="Explore ${category}"
                    >

                        <i class="bi bi-arrow-right"></i>

                    </a>


                </div>

            </div>

        </div>

    `;

}


/* =========================================
   Featured Terms
========================================= */

function renderFeaturedTerms() {

    const container =
        document.getElementById(
            "featuredTerms"
        );


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
                        (term) =>
                            term.id === id
                    )
            )
            .filter(Boolean);


    container.innerHTML =
        featuredTerms
            .map(
                (term) =>
                    createFeaturedTermCard(
                        term
                    )
            )
            .join("");

}


/* =========================================
   Create Featured Term Card
========================================= */

function createFeaturedTermCard(
    term
) {

    const icon =
        getTermIcon(
            term.id
        );


    return `

        <div class="col-md-6 col-lg-4">

            <article class="term-preview-card">


                <div class="term-icon">

                    <i
                        class="bi ${icon}"
                    ></i>

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
                    href="pages/term.html?id=${term.id}"
                >

                    View Term

                    <i
                        class="bi bi-arrow-right"
                    ></i>


                </a>


            </article>

        </div>

    `;

}


/* =========================================
   Term Icons
========================================= */

function getTermIcon(
    termId
) {

    const icons = {

        html:
            "bi-filetype-html",

        css:
            "bi-filetype-css",

        javascript:
            "bi-filetype-js",

        git:
            "bi-git",

        "artificial-intelligence":
            "bi-stars",

        "machine-learning":
            "bi-graph-up-arrow",

        docker:
            "bi-box-seam",

        cybersecurity:
            "bi-shield-lock",

        "cloud-computing":
            "bi-cloud"

    };


    return (
        icons[termId] ||
        "bi-code-square"
    );

}


/* =========================================
   Home Search
========================================= */

function initializeHomeSearch() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (
        !searchInput ||
        !searchButton
    ) {

        return;

    }


    function performSearch() {

        const query =
            searchInput.value.trim();


        if (!query) {

            searchInput.focus();

            return;

        }


        window.location.href =
            `pages/glossary.html?search=${encodeURIComponent(query)}`;

    }


    searchButton.addEventListener(
        "click",
        performSearch
    );


    searchInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {

                performSearch();

            }

        }
    );

}


/* =========================================
   Theme System
========================================= */

function initializeTheme() {

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    /*
       Read saved theme.
       Dark is the default.
    */

    const savedTheme =
        localStorage.getItem(
            "tech-glossary-theme"
        );


    const theme =
        savedTheme === "light"
            ? "light"
            : "dark";


    applyTheme(
        theme
    );


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            toggleTheme
        );

    }

}


/* =========================================
   Apply Theme
========================================= */

function applyTheme(
    theme
) {

    document.body.dataset.theme =
        theme;


    localStorage.setItem(
        "tech-glossary-theme",
        theme
    );


    updateThemeIcon(
        theme
    );

}


/* =========================================
   Toggle Theme
========================================= */

function toggleTheme() {

    const currentTheme =
        document.body.dataset.theme ||
        "dark";


    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    applyTheme(
        newTheme
    );

}


/* =========================================
   Update Theme Icon
========================================= */

function updateThemeIcon(
    theme
) {

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );


    if (!themeToggle) {

        return;

    }


    const icon =
        themeToggle.querySelector(
            "i"
        );


    if (!icon) {

        return;

    }


    if (
        theme === "dark"
    ) {

        icon.className =
            "bi bi-moon-fill";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );


        themeToggle.setAttribute(
            "title",
            "Switch to light theme"
        );

    } else {

        icon.className =
            "bi bi-sun-fill";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );


        themeToggle.setAttribute(
            "title",
            "Switch to dark theme"
        );

    }

}