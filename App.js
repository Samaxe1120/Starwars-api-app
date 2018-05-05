import React, {Component} from 'react'
import './App.css'
import SearchBox from './SearchBox';
import lightsaber from './lightsaber.svg'
import {characters} from './characters.js'
import {Card} from './Card.js'
import CardList from './CardList.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
  characters: [],
   searchfield: ''
}
    }

    componentDidMount(){
      // fetch('https://swapi.co/api/people/1/')
      // .then(response =>{
      //   repsonse.json(); 
      // })
      // .then()
      this.setState({characters:characters});
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
      <CardList characters = {filteredCharacters}/>
      </div>
    ); 
  }

}

export default App;
