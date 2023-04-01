import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};
const HookuseBeforeLeave = () => {
  const begForLife = () => {
    console.log("Plz do not leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default HookuseBeforeLeave;
