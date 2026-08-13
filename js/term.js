/* =========================================
   Tech Glossary Hub
   Term Details JavaScript
========================================= */


/* =========================================
   DOM Ready
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeTermPage();

    }
);


/* =========================================
   Initialize Term Page
========================================= */

function initializeTermPage() {

    if (
        typeof glossaryData === "undefined"
    ) {

        console.error(
            "Glossary data could not be loaded."
        );

        return;

    }


    const termId =
        getTermIdFromURL();


    if (!termId) {

        showTermNotFound();

        return;

    }


    const term =
        findTermById(
            termId
        );


    if (!term) {

        showTermNotFound();

        return;

    }


    renderTerm(
        term
    );


    initializeTermNavigation(
        term
    );


    initializeCopyButtons(
        term
    );

}


/* =========================================
   Get Term ID
========================================= */

function getTermIdFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    return params.get(
        "id"
    );

}


/* =========================================
   Find Term
========================================= */

function findTermById(
    termId
) {

    return glossaryData.find(
        (term) =>
            term.id === termId
    );

}


/* =========================================
   Render Term
========================================= */

function renderTerm(
    term
) {

    const title =
        document.getElementById(
            "termTitle"
        );


    const category =
        document.getElementById(
            "termCategory"
        );


    const definition =
        document.getElementById(
            "termDefinition"
        );


    const syntax =
        document.getElementById(
            "termSyntax"
        );


    const example =
        document.getElementById(
            "termExample"
        );


    const breadcrumb =
        document.getElementById(
            "breadcrumbTerm"
        );


    if (title) {

        title.textContent =
            term.term;

    }


    if (category) {

        category.textContent =
            term.category;

    }


    if (definition) {

        definition.textContent =
            term.definition;

    }


    if (syntax) {

        syntax.textContent =
            term.syntax;

    }


    if (example) {

        example.textContent =
            term.example;

    }


    if (breadcrumb) {

        breadcrumb.textContent =
            term.term;

    }


    updatePageTitle(
        term.term
    );


    updateTermIcon(
        term.id
    );

}


/* =========================================
   Page Title
========================================= */

function updatePageTitle(
    termName
) {

    document.title =
        `${termName} | Tech Glossary Hub`;

}


/* =========================================
   Term Icon
========================================= */

function updateTermIcon(
    termId
) {

    const iconContainer =
        document.getElementById(
            "termIcon"
        );


    if (!iconContainer) {

        return;

    }


    const iconMap = {

        html:
            "bi-filetype-html",

        css:
            "bi-filetype-css",

        javascript:
            "bi-filetype-js",

        dom:
            "bi-diagram-3",

        "responsive-design":
            "bi-phone",

        bootstrap:
            "bi-bootstrap",

        flexbox:
            "bi-layout-three-columns",

        "css-grid":
            "bi-grid-3x3",

        api:
            "bi-plug",

        ajax:
            "bi-arrow-repeat",

        json:
            "bi-braces",

        http:
            "bi-globe",

        "rest-api":
            "bi-arrow-left-right",

        "web-components":
            "bi-box",

        accessibility:
            "bi-universal-access",


        sdlc:
            "bi-diagram-2",

        agile:
            "bi-lightning",

        scrum:
            "bi-kanban",

        waterfall:
            "bi-water",

        "version-control":
            "bi-clock-history",

        git:
            "bi-git",

        github:
            "bi-github",

        repository:
            "bi-folder2-open",

        branch:
            "bi-diagram-3",

        commit:
            "bi-check2-square",

        "pull-request":
            "bi-signpost-split",

        debugging:
            "bi-bug",

        "unit-testing":
            "bi-check-circle",

        "integration-testing":
            "bi-diagram-3",

        "ci-cd":
            "bi-arrow-repeat",


        "artificial-intelligence":
            "bi-stars",

        "machine-learning":
            "bi-graph-up-arrow",

        "deep-learning":
            "bi-diagram-3",

        "neural-network":
            "bi-diagram-3",

        dataset:
            "bi-table",

        "data-preprocessing":
            "bi-funnel",

        feature:
            "bi-bar-chart",

        "feature-engineering":
            "bi-tools",

        classification:
            "bi-tags",

        regression:
            "bi-graph-up",

        clustering:
            "bi-diagram-3",

        "training-data":
            "bi-database",

        "testing-data":
            "bi-clipboard-check",

        nlp:
            "bi-chat-square-text",

        "generative-ai":
            "bi-stars",


        cybersecurity:
            "bi-shield-lock",

        authentication:
            "bi-person-check",

        authorization:
            "bi-person-lock",

        encryption:
            "bi-lock",

        decryption:
            "bi-unlock",

        hashing:
            "bi-fingerprint",

        firewall:
            "bi-shield",

        malware:
            "bi-bug",

        phishing:
            "bi-envelope-exclamation",

        "sql-injection":
            "bi-database-x",

        xss:
            "bi-code-slash",

        vpn:
            "bi-shield-check",

        https:
            "bi-lock-fill",

        "two-factor-authentication":
            "bi-phone-lock",

        "digital-signature":
            "bi-pen",


        "cloud-computing":
            "bi-cloud",

        iaas:
            "bi-server",

        paas:
            "bi-layers",

        saas:
            "bi-window",

        "virtual-machine":
            "bi-pc-display",

        container:
            "bi-box-seam",

        docker:
            "bi-box-seam",

        kubernetes:
            "bi-diagram-3",

        serverless:
            "bi-lightning",

        aws:
            "bi-cloud",

        azure:
            "bi-cloud",

        "ip-address":
            "bi-router",

        dns:
            "bi-globe2",

        "tcp-ip":
            "bi-diagram-2",

        "load-balancer":
            "bi-distribute-vertical"

    };


    const icon =
        iconMap[termId] ||
        "bi-code-square";


    iconContainer.innerHTML = `
        <i class="bi ${icon}"></i>
    `;

}


/* =========================================
   Previous / Next Navigation
========================================= */

function initializeTermNavigation(
    currentTerm
) {

    const currentIndex =
        glossaryData.findIndex(
            (term) =>
                term.id ===
                currentTerm.id
        );


    const previousButton =
        document.getElementById(
            "previousTerm"
        );


    const nextButton =
        document.getElementById(
            "nextTerm"
        );


    /* =========================
       Previous
    ========================== */

    if (
        previousButton &&
        currentIndex > 0
    ) {

        const previousTerm =
            glossaryData[
                currentIndex - 1
            ];


        previousButton.disabled =
            false;


        previousButton.addEventListener(
            "click",
            () => {

                navigateToTerm(
                    previousTerm.id
                );

            }
        );

    } else if (
        previousButton
    ) {

        previousButton.disabled =
            true;

    }


    /* =========================
       Next
    ========================== */

    if (
        nextButton &&
        currentIndex <
            glossaryData.length - 1
    ) {

        const nextTerm =
            glossaryData[
                currentIndex + 1
            ];


        nextButton.disabled =
            false;


        nextButton.addEventListener(
            "click",
            () => {

                navigateToTerm(
                    nextTerm.id
                );

            }
        );

    } else if (
        nextButton
    ) {

        nextButton.disabled =
            true;

    }

}


/* =========================================
   Navigate To Term
========================================= */

function navigateToTerm(
    termId
) {

    window.location.href =
        `term.html?id=${termId}`;

}


/* =========================================
   Copy Buttons
========================================= */

function initializeCopyButtons(
    term
) {

    const copySyntaxButton =
        document.getElementById(
            "copySyntax"
        );


    const copyExampleButton =
        document.getElementById(
            "copyExample"
        );


    if (copySyntaxButton) {

        copySyntaxButton.addEventListener(
            "click",
            () => {

                copyToClipboard(
                    term.syntax,
                    copySyntaxButton
                );

            }
        );

    }


    if (copyExampleButton) {

        copyExampleButton.addEventListener(
            "click",
            () => {

                copyToClipboard(
                    term.example,
                    copyExampleButton
                );

            }
        );

    }

}


/* =========================================
   Copy To Clipboard
========================================= */

async function copyToClipboard(
    text,
    button
) {

    try {

        await navigator.clipboard.writeText(
            text
        );


        const originalHTML =
            button.innerHTML;


        button.innerHTML = `
            <i class="bi bi-check2"></i>
            Copied
        `;


        setTimeout(
            () => {

                button.innerHTML =
                    originalHTML;

            },
            1500
        );


    } catch (error) {

        console.error(
            "Copy failed:",
            error
        );

    }

}


/* =========================================
   Show Not Found
========================================= */

function showTermNotFound() {

    const termDetails =
        document.getElementById(
            "termDetails"
        );


    const notFound =
        document.getElementById(
            "termNotFound"
        );


    if (termDetails) {

        termDetails.hidden =
            true;

    }


    if (notFound) {

        notFound.hidden =
            false;

    }


    document.title =
        "Term Not Found | Tech Glossary Hub";

}