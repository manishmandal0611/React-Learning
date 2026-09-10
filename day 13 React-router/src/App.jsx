import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className = "h-screen">
      <nav classNme = "flex item-center justify-between">
        <h1>Logo</h1>
        <div className = "item-center justify-between">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App