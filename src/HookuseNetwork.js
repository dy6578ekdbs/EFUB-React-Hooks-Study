import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import ReactDom from 'react-dom'

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
  },[]);
  return status;
}
function HookuseNetwork() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went Online" : "We are Offline")
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "ONLINE" : "OFFLIEN"}</h1>
    </div>
  )
}

export default HookuseNetwork
