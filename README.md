# Quiz Master

A polished, responsive quiz application built with React — part of my learning journey with React development.

---

## Overview

Quiz Master is an interactive quiz app supporting multiple question types including single and multiple correct answers. It features a sleek, minimal glassmorphism UI, a progress bar, timer for each question, and accessible keyboard navigation.

This project was created to deepen my understanding of React fundamentals such as component design, state management with hooks, conditional rendering, and implementing accessibility best practices.

---

<img width="1918" height="897" alt="image" src="https://github.com/user-attachments/assets/bc738659-df3a-4c3a-9793-b88db9d8b7c8" />


## Features

- Single and multiple correct answer questions  
- Timer countdown for each question  
- Visual feedback for correct and incorrect answers  
- Progress bar and question counter  
- Responsive UI with modern glassmorphism design  
- Keyboard accessible with ARIA roles  
- Restart quiz functionality without page reload  

---

## Tech Stack

- React (Functional Components and Hooks)  
- CSS custom properties and modular styles  
- Vite for development and bundling  

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repository  
git clone <your-repo-url>

text
2. Navigate to the project directory  
cd Quiz-App

text
3. Install dependencies  
npm install

text
4. Start development server  
npm run dev

text
5. Open http://localhost:5173 in your browser  

---

## Folder Structure

src/
├── assets/ # Images and static assets
├── components/ # React components
│ ├── Quiz.jsx
│ ├── QuestionCard.jsx
│ ├── Options.jsx
│ └── Results.jsx
├── styles/ # CSS files modularized per component
│ ├── App.css
│ ├── Base.css
│ ├── Quiz.css
│ ├── QuestionCard.css
│ ├── Options.css
│ └── Results.css
├── App.jsx # Root component
├── main.jsx # Entry point
└── index.css # Global CSS variables and resets
