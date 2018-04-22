import React from 'react'
import './App.css'
import lightsaber from './lightsaber.svg'

const App = () => {
  return(
    <div className="App">
    <header className="App-header">
          <img src={lightsaber} className="App-logo" alt="logo"/>
          <h1 className="App-title">

            Star Wars Character App</h1>
    </header>  
    </div>
  )
}

export default App;
