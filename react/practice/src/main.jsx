import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterContextProvider } from "./contextApi/counter.context.jsx";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterContextProvider> */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

    {/* </CounterContextProvider> */}
  </StrictMode>
);
