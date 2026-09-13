# Dev Stack 

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4.3.3-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
</div>

A modern and interactive platform for discovering, comparing, and selecting the best developer tools for your next project.

## Overview

Dev Stack is a sleek technology explorer built for developers who want to browse popular stacks, compare categories, and curate a personalized tech setup. The experience combines a clean landing page, interactive technology cards, and a dynamic stack sidebar for quick planning.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- Lucide React 

## Key Features

### 1. Smart technology exploration
Browse a curated collection of tools and technologies across different categories, making it easy to discover the right options for your workflow.

### 2. Personalized stack building
Add technologies to your custom stack and remove them anytime to create a setup that matches your project goals.

### 3. Responsive, modern UI
Enjoy a polished, mobile-friendly interface with smooth interactions, clean typography, and an intuitive layout designed for developers.

## Project Highlights

- Interactive technology cards
- Category-based stack selection
- Toast notifications for actions
- Clean responsive layout for desktop and mobile
- Authentication modal UI for sign-in and sign-up flows

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run the app

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```text
src/
  components/
  types/
  App.tsx
  main.tsx
public/
  technologies.json
```

## License

This project is open for evaluating and assignment purpose.

## Author

Built with passion for developers and exploring mindset. Modern web experiences was used here like Lucide React which is very interesting to add icons. 


## QNA Part:

# 1. What is JSX, and why is it used in React? 
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML like code directly inside our JavaScript files. It is used in React because it makes building UI components highly intuitive and readable, blending the visual structure of HTML with the logical power of JavaScript.

# 2. What is the difference between props and state? 
Props, which is the short form of properties that are used to pass data from a parent component down to a child component, and they are read-only (immutable).1 State, on the other hand, is managed inside a component and can change over time based on user interaction or data fetching.

# 3. What does the useState hook do, and where did you use it in this project? 
The useState hook allows functional components to store and update dynamic data (state). When the state changes, React automatically re-renders the UI to reflect it. In this project, I used it to hold the fetched technologies array, the items the user added to their stack, and the loading spinner status.

# 4. What does the useEffect hook do, and why did you need it to load the JSON data? 
The useEffect hook handles side effects in React, such as fetching data, manipulating the DOM, or setting timers. I needed it to load the JSON data exactly once when the application mounts; without useEffect, the fetch function would trigger an endless loop of re-renders every time the component updated.

# 5. Why does every item in a .map() list need a unique key prop?
React uses the key prop to keep track of which specific items in a list have changed, been added, or been removed. Without a unique key, React gets confused and re-renders the entire list inefficiently, which can cause UI bugs and performance issues.

# 6. What is conditional rendering? Show one place you used it. (example: the empty stack message).
 Conditional rendering is the process of displaying different UI elements based on a specific condition (like an if-else statement but for UI). I used it in the "Your Stack" sidebar: if the stack array is empty, it shows an "Empty Stack" message, otherwise, it maps out the selected technology cards.

# 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 
Data flows down via props: the parent passes data as an attribute, e.g. <Child data={myData} />, and the child receives it through its parameters: function Child({ data }) {...}.
Data flows up via callback props: the parent passes a function as a prop, e.g. <Child onSelect={(id) => {setSelectedId(id)} />. The child calls that function (usually on an event) with whatever value it wants to send: onClick={() => onSelect(42)}. This updates the parent's state, since the function it passed down was really just a wrapper around setState.
This pattern — parent owns the state, child triggers changes via a callback — is called "lifting state up," and it's how React maintains one-directional data flow while still allowing child-to-parent communication.

