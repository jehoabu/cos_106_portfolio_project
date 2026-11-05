# COS 106: Web Technologies Portfolio Project

Welcome to the repository for my personal web portfolio and academic planning web application, built as the final project for **COS 106: Introduction to Web Technologies** at Miva Open University.

🌐 **Live Website:** [https://jehoabu.github.io/cos_106_portfolio_project/](https://jehoabu.github.io/cos_106_portfolio_project/)

---

## 📌 Project Overview

This project is a multi-page, fully responsive personal portfolio designed to highlight software engineering projects, educational background, and interactive web tools. It satisfies all course criteria by demonstrating semantic HTML5 structure, modern responsive CSS layouts (Flexbox & CSS Grid), accessible component styling, dynamic JavaScript DOM manipulation, and client-side form validation.

---

## 👩‍💻 Student Information

* **Author:** Jehoiada Enyinyigocho Abu
* **Degree Program:** Bachelor of Software Engineering
* **Institution:** Miva Open University
* **Course:** COS 106 — Introduction to Web Technologies
* **Academic Year:** 2026

---

## 🚀 Pages & Features Breakdown

The portfolio consists of five core pages:

1. **Home (`index.html`)**
   * Professional biography and welcome section.
   * Profile photo with custom CSS styling and responsive typography.
   * Clean navigation header and structured site footer.

2. **About Me (`about.html`)**
   * Accessible HTML table displaying educational history (`<thead>` and `<tbody>`).
   * Flexbox-based tag list highlighting core technical skills.
   * Detailed career aspirations and background section.

3. **Projects (`projects.html`)**
   * Project showcase formatted using **CSS Grid** (`repeat(auto-fit, minmax(250px, 1fr))`).
   * Responsive media cards with hover float animations.
   * Embedded `<video>` element with native controls demonstrating multimedia integration.

4. **Academic Planner (`planner.html`)**
   * Interactive task management application built with JavaScript.
   * Allows users to dynamically add coursework tasks with due dates.
   * Includes task deletion and completion check-off functionality using **Event Delegation**.
   * Implemented with safe DOM manipulation (`.textContent`) to prevent Cross-Site Scripting (XSS) attacks.

5. **Contact (`contact.html`)**
   * Accessible form with custom input labels and semantic input types (`email`, `tel`).
   * Custom JavaScript validation for:
     * Non-empty inputs.
     * Valid email address formatting (via Regular Expressions).
     * Numeric-only phone number inputs.
   * Accessible, screen-reader-friendly alert banners (`role="alert"`) styled with modular CSS state classes (`.alert-error`, `.alert-success`).

---

## 🛠️ Technology Stack

* **HTML5:** Semantic layout tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* **CSS3:** Custom properties, CSS Grid, Flexbox, responsive images, focus rings, and CSS transitions.
* **JavaScript (ES6):** Event listeners, dynamic element creation (`createElement`), event delegation, DOM manipulation, and RegEx validation.
* **Fonts:** Montserrat (via Google Fonts).

---

## 📂 Project Directory Structure

```
cos_106_portfolio_project/
├── index.html           # Homepage
├── about.html           # Background & Education Table
├── projects.html        # Projects Gallery & Multimedia
├── planner.html         # Interactive Academic Planner App
├── contact.html         # Contact Form & Validation
├── README.md            # Project Documentation
├── css/
│   ├── style.css        # Main layout, colors, typography, grid & flexbox
│   └── forms.css        # Form components, alert states & task list styling
├── js/
│   ├── planner.js       # Academic Planner DOM logic & XSS protection
│   └── contact.js       # Contact form client-side validation logic
└── images/
    ├── jehoiada.jpg     # Profile photo
    ├── ss-tracker.jpg   # Project card thumbnail 1
    ├── campus_event.jpg # Project card thumbnail 2
    └── weather.mp4      # Project video demonstration
```

---

## ⚙️ Local Development Setup

To view and test this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jehoabu/cos_106_portfolio_project.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd cos_106_portfolio_project
   ```
3. **Open the project:**
   * Double-click `index.html` to launch it directly in any web browser.
   * Alternatively, use an editor extension like **VS Code Live Server** to serve the site locally.

---

## 📜 License & Acknowledgments

Built independently by Jehoiada Enyinyigocho Abu for educational evaluation in COS 106 at Miva Open University. All rights reserved.