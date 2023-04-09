import './App.css'
import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'

const useFadeIn = (duration=1, delay=0) => {
  const element = useRef();
  useRef(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opocity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1; 
    }
  },[]);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref:element, style: {opacity: 0}};
}

function HookuseFadeIn() {
  const fadeInH1 = useFadeIn(1,2);
  const fadeInP = useFadeIn(5,10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>hi</p>
    </div>
  )
}

export default HookuseFadeIn
