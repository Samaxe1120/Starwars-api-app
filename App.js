import React, {Component} from 'react'
import './App.css'
import lightsaber from './lightsaber.svg'
import {Card, Card2, Card3, Card4,Card5, Card6, Card7, Card8, Card9, Card10} from './Card.js'

import wrapper from './Wrapper.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
  jedi: [],
   searchfield: ''
}
    }
                       
    render(){
 return (
      <div className="App">
      <header className="App-header">
           
            <h1 className="App-title">
              Star Wars Character API</h1>
      </header>  
          
      <div className = 'allcards'>
           <Card jedi = {this.filteredCharacters}/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            <Card6/>
            <Card7/>
            <Card8/>
            <Card9/>
            <Card10/>
            </div>
        </div>
    ); 
  }

}

export default App;
