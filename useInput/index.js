import React, { useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useInput } from "./useInput";

const App = () => {
    const maxLen = (value) => value.length <= 10; // !value.includes("@")
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);