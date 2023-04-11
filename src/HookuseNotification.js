import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const useNotification = (title, options) => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(title, options);
      } else {
        return;
      }
    });
    return;
  } else {
    new Notification(title, options);
  }
  const fireNotif = () => {};
  return fireNotif;

}

const HookuseNotification = () => {
  const triggerNotif = useNotification("hahaha");
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default HookuseNotification;
