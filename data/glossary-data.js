const glossaryData = [

    /* =========================================
       1. WEB DEVELOPMENT & DESIGN
    ========================================== */

    {
        id: "html",
        term: "HTML",
        category: "Web Development & Design",
        definition:
            "HTML is the standard markup language used to structure content on web pages.",
        syntax:
            "<tag>Content</tag>",
        example:
            "<h1>Hello World</h1>"
    },

    {
        id: "css",
        term: "CSS",
        category: "Web Development & Design",
        definition:
            "CSS is a stylesheet language used to control the appearance, layout, and presentation of web pages.",
        syntax:
            "selector { property: value; }",
        example:
            "p { color: blue; }"
    },

    {
        id: "javascript",
        term: "JavaScript",
        category: "Web Development & Design",
        definition:
            "JavaScript is a programming language used to add dynamic behavior and interactivity to web pages.",
        syntax:
            "function name() { }",
        example:
            "function greet() { console.log('Hello'); }"
    },

    {
        id: "dom",
        term: "DOM",
        category: "Web Development & Design",
        definition:
            "The Document Object Model represents an HTML document as a tree of objects that JavaScript can manipulate.",
        syntax:
            "document.method()",
        example:
            "document.getElementById('title')"
    },

    {
        id: "responsive-design",
        term: "Responsive Design",
        category: "Web Development & Design",
        definition:
            "Responsive design is an approach that makes websites adapt to different screen sizes and devices.",
        syntax:
            "@media (condition) { styles }",
        example:
            "@media (max-width: 768px) { body { font-size: 14px; } }"
    },

    {
        id: "bootstrap",
        term: "Bootstrap",
        category: "Web Development & Design",
        definition:
            "Bootstrap is a frontend CSS framework that provides responsive layouts, components, and utilities.",
        syntax:
            "<div class=\"container\">Content</div>",
        example:
            "<button class=\"btn btn-primary\">Click</button>"
    },

    {
        id: "flexbox",
        term: "Flexbox",
        category: "Web Development & Design",
        definition:
            "Flexbox is a CSS layout model designed for arranging elements efficiently along a row or column.",
        syntax:
            "display: flex;",
        example:
            ".container { display: flex; justify-content: center; }"
    },

    {
        id: "css-grid",
        term: "CSS Grid",
        category: "Web Development & Design",
        definition:
            "CSS Grid is a two-dimensional CSS layout system used to create rows and columns.",
        syntax:
            "display: grid;",
        example:
            ".container { display: grid; grid-template-columns: repeat(3, 1fr); }"
    },

    {
        id: "api",
        term: "API",
        category: "Web Development & Design",
        definition:
            "An API is a set of rules and interfaces that allows different software applications to communicate.",
        syntax:
            "METHOD /endpoint",
        example:
            "GET /users"
    },

    {
        id: "ajax",
        term: "AJAX",
        category: "Web Development & Design",
        definition:
            "AJAX is a technique for exchanging data with a server asynchronously without reloading the entire web page.",
        syntax:
            "fetch(url).then(response => response.json())",
        example:
            "fetch('/api/users').then(response => response.json())"
    },

    {
        id: "json",
        term: "JSON",
        category: "Web Development & Design",
        definition:
            "JSON is a lightweight data-interchange format commonly used for exchanging structured data between applications.",
        syntax:
            "{ \"key\": \"value\" }",
        example:
            "{ \"name\": \"Charan\" }"
    },

    {
        id: "http",
        term: "HTTP",
        category: "Web Development & Design",
        definition:
            "HTTP is the protocol used to transfer resources and messages between web clients and servers.",
        syntax:
            "METHOD /resource HTTP/version",
        example:
            "GET /index.html HTTP/1.1"
    },

    {
        id: "rest-api",
        term: "REST API",
        category: "Web Development & Design",
        definition:
            "A REST API is a web API architecture that uses HTTP methods to interact with resources.",
        syntax:
            "HTTP_METHOD /resource",
        example:
            "GET /api/products"
    },

    {
        id: "web-components",
        term: "Web Components",
        category: "Web Development & Design",
        definition:
            "Web Components are browser technologies used to create reusable custom HTML elements.",
        syntax:
            "customElements.define('name', Class)",
        example:
            "customElements.define('user-card', UserCard)"
    },

    {
        id: "accessibility",
        term: "Accessibility",
        category: "Web Development & Design",
        definition:
            "Web accessibility means designing websites that can be used by people with different abilities and assistive technologies.",
        syntax:
            "semantic HTML + ARIA",
        example:
            "<button aria-label=\"Close\">×</button>"
    },

    {
    id: "semantic-html",
    term: "Semantic HTML",
    category: "Web Development & Design",
    definition:
        "Semantic HTML uses meaningful HTML elements to clearly describe the structure and purpose of content.",
    syntax:
        "<element>Content</element>",
    example:
        "<article><h2>Technology</h2><p>Latest tech news.</p></article>"
},

{
    id: "tailwind-css",
    term: "Tailwind CSS",
    category: "Web Development & Design",
    definition:
        "Tailwind CSS is a utility-first CSS framework used to build custom user interfaces directly in HTML.",
    syntax:
        "<element class=\"utility-class\">Content</element>",
    example:
        "<button class=\"bg-blue-500 text-white px-4 py-2\">Click</button>"
},

{
    id: "frontend",
    term: "Frontend",
    category: "Web Development & Design",
    definition:
        "Frontend refers to the part of a web application that users see and interact with in their browser.",
    syntax:
        "HTML + CSS + JavaScript → User Interface",
    example:
        "A login page containing a form, buttons, and navigation."
},

{
    id: "backend",
    term: "Backend",
    category: "Web Development & Design",
    definition:
        "Backend refers to the server-side part of an application that handles business logic, databases, authentication, and APIs.",
    syntax:
        "Client → Server → Database",
    example:
        "A backend API validating user credentials and returning account data."
},

{
    id: "websocket",
    term: "WebSocket",
    category: "Web Development & Design",
    definition:
        "WebSocket is a communication protocol that provides a persistent connection for real-time data exchange between clients and servers.",
    syntax:
        "Client ↔ WebSocket Server",
    example:
        "A chat application receiving new messages in real time."
},


    /* =========================================
       2. SOFTWARE ENGINEERING
    ========================================== */

    {
        id: "sdlc",
        term: "Software Development Life Cycle",
        category: "Software Engineering",
        definition:
            "SDLC is a structured process used to plan, develop, test, deploy, and maintain software.",
        syntax:
            "Planning → Development → Testing → Deployment → Maintenance",
        example:
            "A team follows SDLC phases to build a web application."
    },

    {
        id: "agile",
        term: "Agile",
        category: "Software Engineering",
        definition:
            "Agile is an iterative software development approach focused on continuous delivery and adapting to changing requirements.",
        syntax:
            "Plan → Build → Test → Review → Improve",
        example:
            "A team releases small software improvements every two weeks."
    },

    {
        id: "scrum",
        term: "Scrum",
        category: "Software Engineering",
        definition:
            "Scrum is an Agile framework that organizes development work into short iterations called sprints.",
        syntax:
            "Product Backlog → Sprint → Review → Retrospective",
        example:
            "A team completes a two-week sprint to build a login feature."
    },

    {
        id: "waterfall",
        term: "Waterfall Model",
        category: "Software Engineering",
        definition:
            "The Waterfall model is a sequential software development approach where each phase is completed before the next begins.",
        syntax:
            "Requirements → Design → Development → Testing → Deployment",
        example:
            "A project completes requirements before starting software design."
    },

    {
        id: "version-control",
        term: "Version Control",
        category: "Software Engineering",
        definition:
            "Version control systems track changes to files and allow developers to manage different versions of a project.",
        syntax:
            "version-control-command file",
        example:
            "git commit -m \"Add login page\""
    },

    {
        id: "git",
        term: "Git",
        category: "Software Engineering",
        definition:
            "Git is a distributed version control system used to track source-code changes.",
        syntax:
            "git command",
        example:
            "git status"
    },

    {
        id: "github",
        term: "GitHub",
        category: "Software Engineering",
        definition:
            "GitHub is a platform for hosting Git repositories and collaborating on software projects.",
        syntax:
            "git remote add origin URL",
        example:
            "git push origin main"
    },

    {
        id: "repository",
        term: "Repository",
        category: "Software Engineering",
        definition:
            "A repository is a storage location containing a project's source code, history, and related files.",
        syntax:
            "git init",
        example:
            "git init"
    },

    {
        id: "branch",
        term: "Branch",
        category: "Software Engineering",
        definition:
            "A branch is an independent line of development in a version-controlled project.",
        syntax:
            "git branch branch-name",
        example:
            "git branch feature-login"
    },

    {
        id: "commit",
        term: "Commit",
        category: "Software Engineering",
        definition:
            "A commit is a saved snapshot of changes in a Git repository.",
        syntax:
            "git commit -m \"message\"",
        example:
            "git commit -m \"Add navigation bar\""
    },

    {
        id: "pull-request",
        term: "Pull Request",
        category: "Software Engineering",
        definition:
            "A pull request is a request to merge changes from one branch into another.",
        syntax:
            "source branch → target branch",
        example:
            "feature-login → main"
    },

    {
        id: "debugging",
        term: "Debugging",
        category: "Software Engineering",
        definition:
            "Debugging is the process of identifying and fixing errors or unexpected behavior in software.",
        syntax:
            "Identify → Inspect → Fix → Test",
        example:
            "Using console.log() to locate a JavaScript error."
    },

    {
        id: "unit-testing",
        term: "Unit Testing",
        category: "Software Engineering",
        definition:
            "Unit testing verifies that individual functions or components work correctly.",
        syntax:
            "test(input) → expected output",
        example:
            "Testing whether add(2, 3) returns 5."
    },

    {
        id: "integration-testing",
        term: "Integration Testing",
        category: "Software Engineering",
        definition:
            "Integration testing verifies that multiple software components work correctly together.",
        syntax:
            "Component A + Component B → Expected Result",
        example:
            "Testing whether a login form correctly communicates with an authentication API."
    },

    {
        id: "ci-cd",
        term: "CI/CD",
        category: "Software Engineering",
        definition:
            "CI/CD represents practices that automate building, testing, and delivering software changes.",
        syntax:
            "Code → Build → Test → Deploy",
        example:
            "A GitHub Actions workflow automatically deploys a website after a successful push."
    },


    {
    id: "software-architecture",
    term: "Software Architecture",
    category: "Software Engineering",
    definition:
        "Software architecture describes the high-level structure, components, relationships, and design decisions of a software system.",
    syntax:
        "Components → Relationships → System Architecture",
    example:
        "Designing a web application using frontend, backend, and database layers."
},

{
    id: "design-pattern",
    term: "Design Pattern",
    category: "Software Engineering",
    definition:
        "A design pattern is a reusable solution to a commonly occurring software design problem.",
    syntax:
        "Problem → Pattern → Reusable Solution",
    example:
        "Using the Singleton pattern to ensure only one instance of a class exists."
},

{
    id: "code-review",
    term: "Code Review",
    category: "Software Engineering",
    definition:
        "Code review is the process of examining source code to identify bugs, improve quality, and maintain coding standards.",
    syntax:
        "Code → Review → Feedback → Improvements",
    example:
        "A developer reviews a pull request before it is merged into the main branch."
},

{
    id: "refactoring",
    term: "Refactoring",
    category: "Software Engineering",
    definition:
        "Refactoring is the process of improving the internal structure of code without changing its external behavior.",
    syntax:
        "Existing Code → Restructure → Same Behavior",
    example:
        "Breaking a large function into smaller reusable functions."
},

{
    id: "software-maintenance",
    term: "Software Maintenance",
    category: "Software Engineering",
    definition:
        "Software maintenance involves modifying software after release to fix issues, improve performance, or add enhancements.",
    syntax:
        "Released Software → Updates → Improved Software",
    example:
        "Updating an application to fix a security vulnerability."
},

    /* =========================================
       3. DATA SCIENCE & AI
    ========================================== */

    {
        id: "artificial-intelligence",
        term: "Artificial Intelligence",
        category: "Data Science & AI",
        definition:
            "Artificial Intelligence is the field of creating systems that can perform tasks requiring capabilities associated with human intelligence.",
        syntax:
            "Input → AI System → Output",
        example:
            "A virtual assistant answering user questions."
    },

    {
        id: "machine-learning",
        term: "Machine Learning",
        category: "Data Science & AI",
        definition:
            "Machine Learning is a branch of AI where systems learn patterns from data to make predictions or decisions.",
        syntax:
            "Data → Model Training → Prediction",
        example:
            "Training a model to predict house prices."
    },

    {
        id: "deep-learning",
        term: "Deep Learning",
        category: "Data Science & AI",
        definition:
            "Deep Learning is a type of machine learning that uses neural networks with multiple layers.",
        syntax:
            "Input → Hidden Layers → Output",
        example:
            "Using a neural network to classify images."
    },

    {
        id: "neural-network",
        term: "Neural Network",
        category: "Data Science & AI",
        definition:
            "A neural network is a computational model inspired by interconnected neurons that learns patterns from data.",
        syntax:
            "Input Layer → Hidden Layer(s) → Output Layer",
        example:
            "A neural network classifying handwritten digits."
    },

    {
        id: "dataset",
        term: "Dataset",
        category: "Data Science & AI",
        definition:
            "A dataset is a structured collection of data used for analysis, training, testing, or research.",
        syntax:
            "Rows × Columns",
        example:
            "A CSV file containing customer names, ages, and purchases."
    },

    {
        id: "data-preprocessing",
        term: "Data Preprocessing",
        category: "Data Science & AI",
        definition:
            "Data preprocessing prepares raw data for analysis or machine learning by cleaning and transforming it.",
        syntax:
            "Raw Data → Clean → Transform → Prepared Data",
        example:
            "Replacing missing age values with the median age."
    },

    {
        id: "feature",
        term: "Feature",
        category: "Data Science & AI",
        definition:
            "A feature is an individual measurable attribute or input variable used by a machine learning model.",
        syntax:
            "X = [feature1, feature2, ...]",
        example:
            "House size is a feature used to predict house prices."
    },

    {
        id: "feature-engineering",
        term: "Feature Engineering",
        category: "Data Science & AI",
        definition:
            "Feature engineering is the process of creating or transforming input features to improve machine learning performance.",
        syntax:
            "Raw Features → Transformation → New Feature",
        example:
            "Creating age from a person's date of birth."
    },

    {
        id: "classification",
        term: "Classification",
        category: "Data Science & AI",
        definition:
            "Classification is a machine learning task that assigns data to predefined categories.",
        syntax:
            "Input → Model → Class",
        example:
            "Classifying an email as spam or not spam."
    },

    {
        id: "regression",
        term: "Regression",
        category: "Data Science & AI",
        definition:
            "Regression is a machine learning technique used to predict continuous numerical values.",
        syntax:
            "Input Features → Model → Numeric Value",
        example:
            "Predicting the price of a house."
    },

    {
        id: "clustering",
        term: "Clustering",
        category: "Data Science & AI",
        definition:
            "Clustering is an unsupervised learning technique that groups similar data points.",
        syntax:
            "Data → Similarity → Groups",
        example:
            "Grouping customers based on purchasing behavior."
    },

    {
        id: "training-data",
        term: "Training Data",
        category: "Data Science & AI",
        definition:
            "Training data is the portion of a dataset used to teach a machine learning model patterns and relationships.",
        syntax:
            "Training Data → Model → Learned Patterns",
        example:
            "Using historical sales records to train a prediction model."
    },

    {
        id: "testing-data",
        term: "Testing Data",
        category: "Data Science & AI",
        definition:
            "Testing data is a separate dataset used to evaluate how well a trained machine learning model performs on unseen data.",
        syntax:
            "Test Data → Trained Model → Evaluation",
        example:
            "Evaluating a trained classifier using previously unseen images."
    },

    {
        id: "nlp",
        term: "Natural Language Processing",
        category: "Data Science & AI",
        definition:
            "Natural Language Processing enables computers to process, understand, and generate human language.",
        syntax:
            "Text → NLP Model → Processed Output",
        example:
            "A chatbot understanding a user's question."
    },

    {
        id: "generative-ai",
        term: "Generative AI",
        category: "Data Science & AI",
        definition:
            "Generative AI refers to AI systems capable of creating new content such as text, images, audio, or code.",
        syntax:
            "Prompt → Generative Model → Generated Content",
        example:
            "An AI model generating Python code from a natural-language prompt."
    },

    {
    id: "supervised-learning",
    term: "Supervised Learning",
    category: "Data Science & AI",
    definition:
        "Supervised learning trains a machine learning model using labeled data containing inputs and their expected outputs.",
    syntax:
        "Labeled Data → Training → Model → Prediction",
    example:
        "Training a model using labeled emails to identify spam messages."
},

{
    id: "unsupervised-learning",
    term: "Unsupervised Learning",
    category: "Data Science & AI",
    definition:
        "Unsupervised learning discovers patterns or structures in data without predefined labels.",
    syntax:
        "Unlabeled Data → Algorithm → Patterns",
    example:
        "Grouping customers into segments based on their behavior."
},

{
    id: "large-language-model",
    term: "Large Language Model",
    category: "Data Science & AI",
    definition:
        "A Large Language Model is an AI model trained on large amounts of text to understand and generate human-like language.",
    syntax:
        "Text Input → LLM → Generated Text",
    example:
        "An AI assistant generating an explanation from a user's question."
},

{
    id: "computer-vision",
    term: "Computer Vision",
    category: "Data Science & AI",
    definition:
        "Computer vision is an AI field that enables computers to interpret and understand information from images and videos.",
    syntax:
        "Image / Video → Vision Model → Interpretation",
    example:
        "Detecting objects in an image using a computer vision model."
},

{
    id: "model-evaluation",
    term: "Model Evaluation",
    category: "Data Science & AI",
    definition:
        "Model evaluation measures how well a machine learning model performs using appropriate metrics and test data.",
    syntax:
        "Model + Test Data → Metrics → Performance",
    example:
        "Evaluating a classification model using accuracy and precision."
},

    /* =========================================
       4. CYBERSECURITY
    ========================================== */

    {
        id: "cybersecurity",
        term: "Cybersecurity",
        category: "Cybersecurity",
        definition:
            "Cybersecurity is the practice of protecting systems, networks, applications, and data from digital threats.",
        syntax:
            "Protect → Detect → Respond → Recover",
        example:
            "Using security controls to protect a company's web application."
    },

    {
        id: "authentication",
        term: "Authentication",
        category: "Cybersecurity",
        definition:
            "Authentication is the process of verifying the identity of a user or system.",
        syntax:
            "Identity + Credentials → Verification",
        example:
            "Logging into an application using a username and password."
    },

    {
        id: "authorization",
        term: "Authorization",
        category: "Cybersecurity",
        definition:
            "Authorization determines what an authenticated user or system is allowed to access or perform.",
        syntax:
            "User + Permission → Resource Access",
        example:
            "An admin user being allowed to delete users."
    },

    {
        id: "encryption",
        term: "Encryption",
        category: "Cybersecurity",
        definition:
            "Encryption transforms readable data into an encoded form to protect it from unauthorized access.",
        syntax:
            "Plaintext + Key → Ciphertext",
        example:
            "Encrypting sensitive data before storing it."
    },

    {
        id: "decryption",
        term: "Decryption",
        category: "Cybersecurity",
        definition:
            "Decryption converts encrypted data back into its readable form using an appropriate key.",
        syntax:
            "Ciphertext + Key → Plaintext",
        example:
            "Decrypting an encrypted message using the correct key."
    },

    {
        id: "hashing",
        term: "Hashing",
        category: "Cybersecurity",
        definition:
            "Hashing converts data into a fixed-length value using a hash function and is commonly used for integrity and password storage.",
        syntax:
            "Data → Hash Function → Hash",
        example:
            "Generating a SHA-256 hash for a file."
    },

    {
        id: "firewall",
        term: "Firewall",
        category: "Cybersecurity",
        definition:
            "A firewall controls network traffic based on predefined security rules.",
        syntax:
            "Traffic → Rules → Allow / Block",
        example:
            "Blocking incoming traffic from a suspicious IP address."
    },

    {
        id: "malware",
        term: "Malware",
        category: "Cybersecurity",
        definition:
            "Malware is malicious software designed to damage systems, steal information, or perform unauthorized actions.",
        syntax:
            "Malicious Code → System → Unauthorized Action",
        example:
            "Ransomware encrypting files and demanding payment."
    },

    {
        id: "phishing",
        term: "Phishing",
        category: "Cybersecurity",
        definition:
            "Phishing is a social engineering technique that attempts to trick users into revealing sensitive information.",
        syntax:
            "Fake Message → User Interaction → Data Theft",
        example:
            "A fake email asking a user to enter banking credentials."
    },

    {
        id: "sql-injection",
        term: "SQL Injection",
        category: "Cybersecurity",
        definition:
            "SQL injection is a vulnerability where malicious SQL input is inserted into an application's database query.",
        syntax:
            "User Input → Unsanitized Query → Database",
        example:
            "A malicious input altering a vulnerable login database query."
    },

    {
        id: "xss",
        term: "Cross-Site Scripting",
        category: "Cybersecurity",
        definition:
            "Cross-Site Scripting is a vulnerability where malicious scripts are injected into web pages viewed by other users.",
        syntax:
            "Untrusted Input → Web Page → Script Execution",
        example:
            "A vulnerable comment field executing an injected JavaScript payload."
    },

    {
        id: "vpn",
        term: "VPN",
        category: "Cybersecurity",
        definition:
            "A VPN creates an encrypted connection between a device and a remote network or VPN service.",
        syntax:
            "Device → Encrypted Tunnel → VPN Server",
        example:
            "Connecting to a company network through a VPN."
    },

    {
        id: "https",
        term: "HTTPS",
        category: "Cybersecurity",
        definition:
            "HTTPS is the secure version of HTTP that uses TLS to protect communication between a client and server.",
        syntax:
            "https://domain.com",
        example:
            "https://example.com"
    },

    {
        id: "two-factor-authentication",
        term: "Two-Factor Authentication",
        category: "Cybersecurity",
        definition:
            "Two-factor authentication requires two different types of verification to access an account.",
        syntax:
            "Password + Second Factor → Access",
        example:
            "Password + verification code from an authenticator app."
    },

    {
        id: "digital-signature",
        term: "Digital Signature",
        category: "Cybersecurity",
        definition:
            "A digital signature is a cryptographic mechanism used to verify the authenticity and integrity of digital data.",
        syntax:
            "Data + Private Key → Signature",
        example:
            "Signing a software release to verify its publisher."
    },

    {
    id: "brute-force-attack",
    term: "Brute Force Attack",
    category: "Cybersecurity",
    definition:
        "A brute force attack attempts to gain unauthorized access by repeatedly trying different passwords or credentials.",
    syntax:
        "Multiple Credential Attempts → Authentication System",
    example:
        "Repeatedly attempting different passwords against a login page."
},

{
    id: "social-engineering",
    term: "Social Engineering",
    category: "Cybersecurity",
    definition:
        "Social engineering manipulates people into revealing confidential information or performing unsafe actions.",
    syntax:
        "Manipulation → User Action → Information / Access",
    example:
        "An attacker pretending to be technical support and asking for account information."
},

{
    id: "penetration-testing",
    term: "Penetration Testing",
    category: "Cybersecurity",
    definition:
        "Penetration testing is an authorized security assessment that identifies vulnerabilities by simulating controlled attacks.",
    syntax:
        "Target → Security Testing → Vulnerabilities → Report",
    example:
        "A security team tests a web application for common vulnerabilities."
},

{
    id: "security-patch",
    term: "Security Patch",
    category: "Cybersecurity",
    definition:
        "A security patch is a software update designed to fix known security vulnerabilities.",
    syntax:
        "Vulnerability → Patch → Updated Software",
    example:
        "Installing an operating system update that fixes a known security issue."
},

{
    id: "zero-day",
    term: "Zero-Day Vulnerability",
    category: "Cybersecurity",
    definition:
        "A zero-day vulnerability is a previously unknown or unpatched security weakness that can potentially be exploited.",
    syntax:
        "Unknown Vulnerability → Exploit → Security Risk",
    example:
        "A newly discovered vulnerability affecting an application before a patch is available."
},

    /* =========================================
       5. CLOUD & NETWORKING
    ========================================== */

    {
        id: "cloud-computing",
        term: "Cloud Computing",
        category: "Cloud & Networking",
        definition:
            "Cloud computing provides computing resources such as servers, storage, and networking over the internet.",
        syntax:
            "Client → Internet → Cloud Resources",
        example:
            "Hosting a web application on a cloud platform."
    },

    {
        id: "iaas",
        term: "IaaS",
        category: "Cloud & Networking",
        definition:
            "Infrastructure as a Service provides virtualized computing infrastructure such as servers, storage, and networks.",
        syntax:
            "Cloud Provider → Virtual Infrastructure → Customer",
        example:
            "Creating a virtual machine on a cloud platform."
    },

    {
        id: "paas",
        term: "PaaS",
        category: "Cloud & Networking",
        definition:
            "Platform as a Service provides a managed environment for developing and deploying applications.",
        syntax:
            "Developer → Platform → Application",
        example:
            "Deploying a web application without managing the underlying server."
    },

    {
        id: "saas",
        term: "SaaS",
        category: "Cloud & Networking",
        definition:
            "Software as a Service provides software applications over the internet without requiring local installation.",
        syntax:
            "User → Internet → Software Application",
        example:
            "Using an online email application through a browser."
    },

    {
        id: "virtual-machine",
        term: "Virtual Machine",
        category: "Cloud & Networking",
        definition:
            "A virtual machine is a software-based computer that runs an operating system within a virtualized environment.",
        syntax:
            "Physical Host → Hypervisor → Virtual Machine",
        example:
            "Running an Ubuntu virtual machine on a Windows computer."
    },

    {
        id: "container",
        term: "Container",
        category: "Cloud & Networking",
        definition:
            "A container packages an application and its dependencies into an isolated environment.",
        syntax:
            "Application + Dependencies → Container",
        example:
            "Packaging a Python application into a container."
    },

    {
        id: "docker",
        term: "Docker",
        category: "Cloud & Networking",
        definition:
            "Docker is a platform used to build, package, and run applications in containers.",
        syntax:
            "docker command",
        example:
            "docker run nginx"
    },

    {
        id: "kubernetes",
        term: "Kubernetes",
        category: "Cloud & Networking",
        definition:
            "Kubernetes is a container orchestration platform used to deploy, manage, and scale containerized applications.",
        syntax:
            "Cluster → Nodes → Pods → Containers",
        example:
            "kubectl get pods"
    },

    {
        id: "serverless",
        term: "Serverless Computing",
        category: "Cloud & Networking",
        definition:
            "Serverless computing allows developers to run application code without directly managing the underlying servers.",
        syntax:
            "Event → Function → Result",
        example:
            "A cloud function executing when an HTTP request is received."
    },

    {
        id: "aws",
        term: "AWS",
        category: "Cloud & Networking",
        definition:
            "Amazon Web Services is a cloud computing platform offering services for computing, storage, databases, networking, and more.",
        syntax:
            "Application → AWS Service → Resource",
        example:
            "Hosting files using Amazon S3."
    },

    {
        id: "azure",
        term: "Azure",
        category: "Cloud & Networking",
        definition:
            "Microsoft Azure is a cloud computing platform providing infrastructure, application, data, and AI services.",
        syntax:
            "Application → Azure Service → Resource",
        example:
            "Deploying a web application using Azure App Service."
    },

    {
        id: "ip-address",
        term: "IP Address",
        category: "Cloud & Networking",
        definition:
            "An IP address is a numerical identifier assigned to a device or network interface for communication over an IP network.",
        syntax:
            "IPv4: x.x.x.x",
        example:
            "192.168.1.10"
    },

    {
        id: "dns",
        term: "DNS",
        category: "Cloud & Networking",
        definition:
            "The Domain Name System translates human-readable domain names into IP addresses.",
        syntax:
            "Domain → DNS → IP Address",
        example:
            "example.com → 93.184.216.34"
    },

    {
        id: "tcp-ip",
        term: "TCP/IP",
        category: "Cloud & Networking",
        definition:
            "TCP/IP is a suite of networking protocols used for communication across interconnected networks.",
        syntax:
            "Application → Transport → Internet → Network Access",
        example:
            "A browser using TCP/IP to communicate with a web server."
    },

    {
        id: "load-balancer",
        term: "Load Balancer",
        category: "Cloud & Networking",
        definition:
            "A load balancer distributes incoming network traffic across multiple servers to improve availability and performance.",
        syntax:
            "Client → Load Balancer → Server Pool",
        example:
            "Distributing web requests across three application servers."
    },

    {
        id: "google-cloud",
        term: "Google Cloud",
        category: "Cloud & Networking",
        definition:
            "Google Cloud is a cloud computing platform providing services for computing, storage, databases, networking, and AI.",
        syntax:
            "Application → Google Cloud Service → Resource",
        example:
            "Deploying an application using Google Cloud services."
    },

    {
        id: "cloud-storage",
        term: "Cloud Storage",
        category: "Cloud & Networking",
        definition:
            "Cloud storage is a service that stores data on remote infrastructure accessible through a network or the internet.",
        syntax:
            "Data → Cloud Storage → Remote Access",
        example:
            "Storing application images and documents in cloud storage."
    },

    {
        id: "cdn",
        term: "CDN",
        category: "Cloud & Networking",
        definition:
            "A Content Delivery Network distributes cached content through geographically distributed servers to improve delivery speed.",
        syntax:
            "User → Nearest CDN Server → Content",
        example:
            "Serving website images from a CDN located near the user."
    },

    {
        id: "subnet",
        term: "Subnet",
        category: "Cloud & Networking",
        definition:
            "A subnet is a logical subdivision of an IP network used to organize and manage network resources.",
        syntax:
            "Network → Subnet → Devices",
        example:
            "Creating separate subnets for application servers and databases."
    },

    {
        id: "proxy-server",
        term: "Proxy Server",
        category: "Cloud & Networking",
        definition:
            "A proxy server acts as an intermediary between a client and another server when handling network requests.",
        syntax:
            "Client → Proxy → Destination Server",
        example:
            "A company routing employee web requests through a proxy server."
    }

];