import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'

function App() {


  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
