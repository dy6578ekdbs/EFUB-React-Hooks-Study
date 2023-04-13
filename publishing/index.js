import React, { useState, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import useTitle from "@nooks/use-title";

const App = () => {
  useTitle("I love NC");
  return (
    <div className="App">
      <div>Hi</div>
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