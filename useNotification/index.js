import React, { useState, useEffect, StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import {useNotification} from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I steal your money?", {body: "I love money dont you"});
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Hello</button>
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
