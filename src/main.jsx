import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

const root = document.getElementById ('root') 
const Vroot = ReactDOM.createRoot(root)

Vroot.render(
    <App />
)

/*Vroot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */