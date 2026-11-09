# COS 106: Personal Portfolio & Interactive Web Applications

Welcome to the official repository for my multi-page web portfolio and interactive academic tools, developed as the final capstone project for **COS 106: Introduction to Web Technologies** at Miva Open University.

🌐 **Live Production Website:** [https://jehoabu.github.io/cos_106_portfolio_project/](https://jehoabu.github.io/cos_106_portfolio_project/)  
📁 **GitHub Repository:** [https://github.com/jehoabu/cos_106_portfolio_project](https://github.com/jehoabu/cos_106_portfolio_project)

---

## 👨‍💻 Student & Course Information

* **Author:** Jehoiada Enyinyigocho Abu
* **Degree Program:** Bachelor of Software Engineering
* **Institution:** Miva Open University
* **Course Code & Title:** COS 106 — Introduction to Web Technologies
* **Academic Year:** 2026

---

## 📌 Project Overview & Purpose

This capstone project is a responsive, accessible, multi-page portfolio site engineered to highlight software engineering projects, educational qualifications, and interactive client-side web applications. 

Beyond serving as a professional digital presence, the codebase demonstrates strict adherence to industry standards, including:
* **Semantic HTML5 Markup:** Meaningful structural tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) with zero redundant container bloat.
* **Modern CSS System Architecture:** Sticky glassmorphism navigation, CSS Grid layout patterns, Flexbox alignment, ambient drop shadows, and micro-interactions.
* **Vanilla JavaScript ES6+ Interactivity:** Event delegation, DOM manipulation, custom character-by-character typewriter effect, and client-side form validation.
* **Security & Accessibility Best Practices:** Cross-Site Scripting (XSS) mitigation using text node assignment (`.textContent`), explicit WCAG focus rings, and screen-reader ARIA live regions (`role="alert"`).

---

## 🌟 Key Technical Features

1. **Dynamic Typewriter Welcome Effect (`js/typing.js`):**
   * Automatically types out the hero welcome statement character by character.
   * Features a custom CSS keyframe blinking cursor (`|`) that smoothly fades out upon completion.
   * Includes defensive DOM checks to prevent script errors on secondary pages.

2. **Sticky Glassmorphism Header (`css/style.css`):**
   * Header navigation remains pinned to the top of the viewport during scrolling.
   * Utilizes `backdrop-filter: blur(12px)` for a semi-transparent glass aesthetic.
   * Dynamic active page indicators (`aria-current="page"`) and pill-shaped hover states.

3. **Interactive Academic Planner App (`planner.html` & `js/planner.js`):**
   * Enables users to add coursework tasks with due dates dynamically.
   * Utilizes **Event Delegation** on the list container to manage dynamic task completion toggles and task deletion efficiently.
   * Implements **XSS Protection** by avoiding `innerHTML` when handling user text input.

4. **Robust Contact Form Validation (`contact.html` & `js/contact.js`):**
   * Real-time client-side input trimming and empty-field checks.
   * Regular Expression (RegEx) matching for email formatting (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) and numeric-only phone inputs (`/^\d+$/`).
   * Dynamic alert banners driven by state CSS classes (`.alert-error`, `.alert-success`) paired with `role="alert"`.

5. **Responsive Projects Gallery (`projects.html`):**
   * Built with fluid CSS Grid (`repeat(auto-fit, minmax(280px, 1fr))`) for zero-breakpoint desktop and mobile adaptations.
   * Embedded `<video>` element with custom controls satisfying course multimedia criteria.

---

## 📑 Pages Breakdown

| Page | File | Key Highlights |
| :--- | :--- | :--- |
| **Home** | `index.html` | Hero profile photo with circular masking, smooth single-pass JS typing effect, biography container. |
| **About Me** | `about.html` | Academic qualifications table using `<thead>`/`<tbody>`, styled alternating rows, Flexbox skill tag pills. |
| **Projects** | `projects.html` | Interactive card gallery built with CSS Grid, hover-lift animations, embedded HTML5 `<video>` controls. |
| **Academic Planner** | `planner.html` | Interactive task creation, completion check-off, and deletion powered by JavaScript DOM manipulation. |
| **Contact** | `contact.html` | Responsive form inputs with explicit focus outlines, RegEx client-side validation, accessible feedback alerts. |

---

## 🛠️ Technology Stack

* **Markup:** HTML5 (Semantic elements, ARIA attributes, table structures)
* **Styling:** CSS3 (Flexbox, CSS Grid, custom keyframe animations, glassmorphism backdrop blur)
* **Scripting:** Vanilla JavaScript ES6+ (DOM manipulation, event delegation, RegEx, string sanitization)
* **Design System & Fonts:** Montserrat (via Google Fonts)
* **Deployment & Version Control:** Git, GitHub, GitHub Pages
* **Documentation:** LaTeX (`report.tex` for formal project report & defence preparation)

---

## 📂 Repository Directory Structure

```
cos_106_portfolio_project/
├── index.html           # Homepage with Hero & Typing Banner
├── about.html           # Education Table & Skill Badges
├── projects.html        # Projects Gallery (CSS Grid & Video)
├── planner.html         # Academic Task Manager Interface
├── contact.html         # Contact Portal & Form Container
├── README.md            # Comprehensive Project Documentation
├── report.tex           # Formal LaTeX Project Report & Defence Document
├── css/
│   ├── style.css        # Core layout, sticky glass navbar, design system & typography
│   └── forms.css        # Form styling, accessible alerts & task list components
├── js/
│   ├── typing.js        # Single-pass typewriter hero animation & cursor logic
│   ├── planner.js       # Academic Planner DOM manipulation & XSS protection
│   └── contact.js       # Form validation logic & ARIA alert feedback
└── images/
    ├── jehoiada.jpg     # Profile portrait image
    ├── ss-tracker.jpg   # Project card thumbnail 1
    ├── campus_event.jpg # Project card thumbnail 2
    └── weather.mp4      # Project video demonstration clip
```

---

## 💻 Local Development Setup

To inspect, run, or modify this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jehoabu/cos_106_portfolio_project.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd cos_106_portfolio_project
   ```

3. **Launch in Browser:**
   * Double-click `index.html` to open the site directly in your web browser.
   * Alternatively, use the **VS Code Live Server** extension (`Alt + L, Alt + O`) to serve the site locally with hot reloading.

---

## 🔒 Security & Quality Assurance

* **Cross-Site Scripting (XSS):** All dynamic strings injected into the DOM (such as user-submitted task titles) are created via `document.createElement()` and populated strictly using `.textContent`.
* **Input Sanitization:** User inputs are processed using `.trim()` to discard leading/trailing whitespace and prevent empty submissions.
* **Keyboard Navigation:** All interactive elements (links, buttons, form inputs) feature explicit focus states (`outline: 2px solid #1098ad`) to support keyboard accessibility.

---

## 📄 License & Acknowledgments

Developed by **Jehoiada Enyinyigocho Abu** for academic evaluation in **COS 106: Introduction to Web Technologies** at Miva Open University. All rights reserved.