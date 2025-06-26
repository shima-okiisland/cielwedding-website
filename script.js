:root {
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Noto Sans JP', sans-serif;
    --text-color: #4a4a4a;
    --background-color: #f8f5f1;
    --border-color: #ddd8d1;
    --accent-color: #2c3e50;
}

body {
    font-family: var(--font-sans);
    color: var(--text-color);
    background-color: var(--background-color);
    margin: 0;
    line-height: 1.8;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.main-header {
    padding: 3em 1em;
    text-align: center;
}

.site-title {
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--text-color);
}

.content-wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2em;
}

section {
    padding: 4em 0;
}

.section-title {
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0.5em;
}

.section-subtitle {
    text-align: center;
    margin-top: 0;
    margin-bottom: 3em;
    font-size: 0.9rem;
    color: #7f7f7f;
}

.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
}

thead {
    border-bottom: 1px solid var(--border-color);
}

th {
    padding: 0 1em 1em 1em;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    color: #888;
    font-size: 0.8rem;
}

td {
    padding: 1.5em 1em;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid var(--border-color);
}
tr:last-child td {
    border-bottom: none;
}

td[data-label="プラン名"] {
    font-weight: 400;
    white-space: nowrap;
}

td small {
    display: block;
    font-size: 0.8em;
    color: #888;
    margin-top: 0.2em;
}

.guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2em;
    margin-top: 3em;
}

.guide-item h3 {
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: 1.1rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5em;
    margin-bottom: 1em;
}

.guide-item ul {
    list-style: none;
    padding-left: 0;
    font-size: 0.9rem;
}

.guide-item li {
    margin-bottom: 0.8em;
}

.cta-section {
    text-align: center;
    padding: 2em 0;
}

.cta-button {
    display: inline-block;
    background-color: var(--accent-color);
    color: var(--background-color);
    font-family: var(--font-sans);
    font-weight: 400;
    text-decoration: none;
    padding: 1em 3em;
    border-radius: 2px;
    transition: opacity 0.3s ease;
}
.cta-button:hover {
    opacity: 0.8;
}

.main-footer {
    text-align: center;
    padding: 3em 1em;
    font-size: 0.8rem;
    color: #aaa;
    margin-top: 4em;
}
.main-footer p {
    margin: 0.5em 0;
}

a {
    color: var(--text-color);
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

/* --- Animation --- */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- Responsive --- */
@media (max-width: 768px) {
    .content-wrapper {
        padding: 0 1em;
    }
    table, thead, tbody, th, td, tr {
        display: block;
    }
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    tr {
        margin-bottom: 2em;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 1em;
    }
    td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding: 0.8em 0 0.8em 50%;
        text-align: right;
    }
    td:before {
        content: attr(data-label);
        position: absolute;
        left: 0.8em;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: 400;
        color: #555;
    }
    td:last-child {
        border-bottom: 0;
    }
}
