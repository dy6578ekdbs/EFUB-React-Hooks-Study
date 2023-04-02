import './App.css'
import React, { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener('mouseleave', handle)
    return () => document.addEventListener('mouseleave', handle)
  }, [])
  if (typeof onBefore != 'function') {
    return;
  }
  const handle = (event) => {
    const { clinetY } = event
    if (clinetY <= 0) {
      onBefore()
    }
    console.log('leaveing')
  }
}

function HookuseBefore() {
  const begForLife = () => {
    console.log("plz don't leave")
  }
  useBeforeLeave(begForLife)
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  )
}

export default HookuseBefore
