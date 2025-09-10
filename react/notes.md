## Difference between Real DOM and Virtual DOM

- Real DOM (Document Object Model):

  - Actual representation of the HTML structure in the browser.
  - Directly reflects changes in UI.
  - Slow for frequent updates → every DOM change causes reflow & repaint.
  - Example:
    ```jsx
    document.getElementById("btn").innerText = "Clicked!";
    ```

- Virtual DOM:

  - A lightweight, in-memory JS object copy of the Real DOM (used in React, Vue).

  - When state changes → React updates the Virtual DOM first → compares old vs new (diffing) → updates only the changed parts in the Real DOM.
  - Faster, more efficient.

- ✅ Key difference:
  - Real DOM updates the whole tree,
  - Virtual DOM updates only what’s changed.

---

## Explain Component Lifecycle (React)

React components go through 3 main phases:

- Mounting → Component is created & inserted into DOM.

  - Methods/Hooks: `constructor`, `render`, `componentDidMount` / `useEffect(() => {}, [])`.

- Updating → Component re-renders when props or state change.

  - Methods/Hooks: `shouldComponentUpdate`, `render`, `componentDidUpdate` / `useEffect(() => {...}, [state])`.

- Unmounting → Component is removed from DOM.

  - Methods/Hooks: `componentWillUnmount` / cleanup in `useEffect`.

Example with hooks:

```jsx
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

## What is React Reconciliation?

- Reconciliation = the process React uses to update the DOM efficiently when a component’s state/props change.

- React uses the Virtual DOM:

  - Builds a new virtual tree after a state/prop change.

  - Compares old vs new (diffing).

  - Applies the minimum required updates to the Real DOM.

- Example:

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1> {/* only this updates, not entire DOM */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

✅ Interview short answer:

- Reconciliation is how React compares the new Virtual DOM with the old one and updates only the changed parts in the Real DOM for performance.

---

## React vs Next.js (Which to prefer?)

- React → library for building UI. Needs additional setup for routing, SSR, SEO, etc.

- Next.js → framework built on top of React, with features like:

  - File-based routing (no need for React Router).

  - Server-side rendering (SSR) & Static Site Generation (SSG).

  - API routes built-in.

  - Better SEO.

👉 If you want just a frontend UI, React is fine.

👉 If you want production-ready apps with SSR, SEO, routing, APIs, Next.js is preferred.

---

## Virtual DOM in React & which DOM comes first in npm run dev?

- Virtual DOM (VDOM): a lightweight copy of the Real DOM kept in memory.

- When state/props change, React updates the VDOM first, then uses diffing + reconciliation to update only the changed parts in the Real DOM.

👉 When you run npm run dev:

- React first builds the Virtual DOM in memory.

- Then updates the Real DOM based on differences.
  So Virtual DOM is created first.

---

## Routing in React

React itself doesn’t have routing → we use React Router.

- BrowserRouter → uses HTML5 history API.

- Routes & Route → define components per path.

- Link → navigation without reload.

Example:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```
---

## Batching in React
### 📌 Definition

Batching means React groups multiple state updates into a single re-render, instead of re-rendering the component for each update separately.

This reduces unnecessary DOM updates and makes React apps much faster.

### 📌 Example without batching (conceptually)
setCount(count + 1);
setName("Nandan");


👉 If React didn’t batch these, it would:

1. Re-render after setCount

2. Re-render again after setName

That’s two re-renders.

### 📌 Example with batching (React behavior)
setCount(count + 1);
setName("Nandan");


👉 React batches them into one update cycle → so only one re-render happens.

### 📌 Automatic Batching (React 18+)

In React 18 and above, batching is more powerful:
- State updates inside Promises, setTimeout, fetch, or event handlers are batched automatically.

Example:
```jsx
setTimeout(() => {
  setCount(c => c + 1);
  setName("Nandan");
  // ✅ Both are batched into one render (React 18+)
}, 1000);
```

In older React (<18), only updates inside React events (like onClick) were batched, but not inside setTimeout or Promises.

### 📌 Why Batching is Important

- Saves performance by reducing unnecessary re-renders.
- Keeps UI updates smooth and efficient.

### ⚡ So in short:
Batching in React = grouping multiple state updates into one re-render.
