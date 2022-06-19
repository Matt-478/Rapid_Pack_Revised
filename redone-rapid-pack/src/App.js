import React from 'react'
import './App.css';
import Homepage from './components/Homepage'

function App() {
  return (
    <div className="App">
      <div className="navbar p-page"> 
        <h2>RapidPack</h2>
      </div>

      <Homepage />

      <footer className="p-page main-footer">
        <a href="https://www.linkedin.com/in/matiss-komlevs-20343020b/" target="_blank"><p>Linkedin</p></a>
        <a href="https://github.com/Matt-478" target="_blank"><p>Github</p></a>
      </footer>
    </div>
  )
}

export default App;
