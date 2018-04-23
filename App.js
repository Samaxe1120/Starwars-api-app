import React, {Component} from 'react'
import './App.css'
import SearchBox from './SearchBox';
import lightsaber from './lightsaber.svg'
import {characters} from './characters.js'
import {Card, Card2, Card3, Card4, Card5, Card6, cardComponent} from './Card';


class App extends Component {
  constructor(){
    super()
    this.state = {
  characters: characters,
   searchfield: ''
}
    }

        onSearchChange = (event) => {
          this.setState({searchfield: event.target.value})
        }   

    render(){
        const filteredCharacters = this.state.characters.filter(characters =>{
 return characters.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })

    return(
      <div className="App">
      <header className="App-header">
            <img src={lightsaber} className="App-logo" alt="logo"/>
            <h1 className="App-title">
              Star Wars Character App</h1>
      </header>  
      <SearchBox searchChange= {this.onSearchChange} />
      <cardComponent characters = {filteredCharacters}/>
      
      </div>
    ); 
  }
