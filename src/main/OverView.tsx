import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
import logo from '@/logo.svg'
import  Clock from 'mainpath/component/Clock'

function OverView() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{background: "#ffffff",textAlign:'center'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Clock />
       
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  )
}

export default OverView
