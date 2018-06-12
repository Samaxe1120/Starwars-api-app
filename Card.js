import React, {Component} from 'react';

import './App.css'
import 'tachyons'
import App from './App'




class Card extends Component {
  constructor(){
    super()
    this.state = {
  jedi: [],
   searchfield: ''
}
    }
         
   
    // Loop through API
        componentDidMount(){
         fetch('https://swapi.co/api/people/1')
      .then(response => { return response.json()})
       .then(people => this.setState({jedi:people}))
        }

         
    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
      console.log(event.target.value)
    }   
    
    render(){
      let luke1 = 'https://s-media-cache-ak0.pinimg.com/originals/a5/68/cf/a568cf5243d108b74e64b15893031e60.jpg'

   return (
                    <div className = 'charcards'>
             <div>
             <img className= 'pic' alt = 'Luke Skywalker' src = {luke1} />
                </div>
                  <hr/>
                <div class="flip-container">
	<div class="flipper">
		<div class="front">
    <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
		</div>
		<div class="back">
		<h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                  <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                  <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                  <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
		</div>
	</div>
</div>
        
                  
          </div>
      );
    }

  }


    class Card2 extends Component {
      constructor(){
      super()     
     this.state = {
      jedi: [],
       searchfield: ''
    }
        }

        componentDidMount(){
          fetch('https://swapi.co/api/people/2/?format=json')
          .then(response => { return response.json()})
           .then(people => this.setState({jedi:people}))
          // this.setState({characters:characters});
        }

      render(){

        let C3P0= 'https://i.ytimg.com/vi/pE1LLqBPSQQ/maxresdefault.jpg'
      return (
             <div className = 'charcards'>
               <div>
               <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={C3P0}/>
                  </div>
                  <hr/>
                  <div class="flip-container">
                  <div class="flipper">
                    <div class="front">
                    <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
                    </div>
                    <div class="back">
                    <h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                                  <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                                  <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                                  <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
                    </div>
                  </div>
                </div>
                        
                                  
                          </div>
                      );
                    }
                
                  }
                

      class Card3 extends Component {
        constructor(){
        super()     
       this.state = {
        jedi: [],
         searchfield: ''
      }
          }
  
          componentDidMount(){
            fetch('https://swapi.co/api/people/20/?format=json')
            .then(response => { return response.json()})
             .then(people => this.setState({jedi:people}))
            // this.setState({characters:characters});
          }
  
        render(){

          let yoda = 'https://img00.deviantart.net/f7c3/i/2010/191/c/e/yoda_portrait_painting_by_jonmckenzie.jpg'
        return (
               <div className = 'charcards'>
                 <div>
                 <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={yoda}/>
                    </div>
                    <hr/>
                    <div class="flip-container">
                    <div class="flipper">
                      <div class="front">
                      <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
                      </div>
                      <div class="back">
                      <h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                                    <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                                    <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                                    <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
                      </div>
                    </div>
                  </div>
                                                              
                            </div>
                        );
                      }
                  
                    }
                  
        class Card4 extends Component {
          constructor(){
          super()     
         this.state = {
          jedi: [],
           searchfield: ''
        }
            }
    
            componentDidMount(){
              fetch('https://swapi.co/api/people/4/?format=json')
              .then(response => { return response.json()})
               .then(people => this.setState({jedi:people}))
              // this.setState({characters:characters});
            }
    
          render(){
              let vader = 'https://orig00.deviantart.net/9a02/f/2012/284/a/1/a178ed8bb0f0857c4213958cd14027c8-d5hhfm3.jpg'
          return (
                 <div className = 'charcards'>
                   <div>
                   <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={vader}/>
                      </div>
                      <hr/>
                      <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                        <h2  className = "name1 name2"> Name: {this.state.jedi.name}</h2>
                        </div>
                        <div class="back">
                        <h2 className = 'height1 data1'>Height: {this.state.jedi.height}</h2>
                                      <h2 className = 'mass1 data1'> Mass: {this.state.jedi.mass}</h2>
                                      <h2 className= 'haircolor data1'> HairColor: {this.state.jedi.hair_color} </h2>
                                      <h2 className= 'birthyear data1'> BirthYear: {this.state.jedi.birth_year}</h2>
                        </div>
                      </div>
                    </div>
                            
                                      
                              </div>
                          );
                        }
                    
                      }
                    

          class Card5 extends Component {
            constructor(){
            super()     
           this.state = {
            jedi: [],
             searchfield: ''
          }
              }
      
              componentDidMount(){
                fetch('https://swapi.co/api/people/5/?format=json')
                .then(response => { return response.json()})
                 .then(people => this.setState({jedi:people}))
                // this.setState({characters:characters});
              }
      
            render(){
let leia = 'https://images.fineartamerica.com/images-medium-large-5/princess-leia-florian-rodarte.jpg'

            return (
                   <div className = 'charcards'>
                     <div>
                     <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={leia}/>
                        </div>
                        <hr/>
                        <div class="flip-container">
	<div class="flipper">
		<div class="front">
    <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
		</div>
		<div class="back">
		<h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                  <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                  <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                  <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
		</div>
	</div>
</div>
                        
          </div>
      );
    }

  }


            class Card6 extends Component {
              constructor(){
              super()     
             this.state = {
              jedi: [],
               searchfield: ''
            }
                }
        
                componentDidMount(){
                  fetch('https://swapi.co/api/people/21/?format=json')
                  .then(response => { return response.json()})
                   .then(people => this.setState({jedi:people}))
                  // this.setState({characters:characters});
                }
        
              render(){
                let palpatine = 'https://c1.staticflickr.com/7/6017/6191456450_e15c906b8f_z.jpg'
              return (
                     <div id = 'cardx' className =  'charcards'>
                       <div>
                       <img className= 'pic obi'  alt = 'Obi Wan Kenobi' src ={palpatine}/>
                          </div>
                          <hr/>
                          <div class="flip-container">
                          <div class="flipper">
                            <div class="front">
                            <h2  className = "name1 name2"> Name: {this.state.jedi.name}</h2>
                            </div>
                            <div class="back">
                            <h2 className = 'height1 data data1'>Height: {this.state.jedi.height}</h2>
                                          <h2 className = 'mass1 data data1'> Mass: {this.state.jedi.mass}</h2>
                                          <h2 className= 'haircolor data data1'> HairColor: {this.state.jedi.hair_color} </h2>
                                          <h2 className= 'birthyear data data1'> BirthYear: {this.state.jedi.birth_year}</h2>
                            </div>
                          </div>
                        </div>
                                
                                          
                                  </div>
                              );
                            }
                        
                          }
                        
              class Card7 extends Component {
                constructor(){
                super()     
               this.state = {
                jedi: [],
                 searchfield: ''
              }
                  }
          
                  componentDidMount(){
                    fetch('https://swapi.co/api/people/22/?format=json')
                    .then(response => { return response.json()})
                     .then(people => this.setState({jedi: people}))
                    // this.setState({characters:characters});
                  }
          
                render(){
                  let boba = 'https://i.pinimg.com/originals/db/12/58/db1258a26112c36490fb5dee797fb7a7.jpg'
                return (
                       <div className = 'charcards'>
                         <div>
                         <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={boba}/>
                            </div>
                            <hr/>
                            <div class="flip-container">
                            <div class="flipper">
                              <div class="front">
                              <h2  className = "name1 name2"> Name: {this.state.jedi.name}</h2>
                              </div>
                              <div class="back">
                              <h2 className = 'height1 data data1'>Height: {this.state.jedi.height}</h2>
                                            <h2 className = 'mass1 data data1'> Mass: {this.state.jedi.mass}</h2>
                                            <h2 className= 'haircolor data data1'> HairColor: {this.state.jedi.hair_color} </h2>
                                            <h2 className= 'birthyear data data1'> BirthYear: {this.state.jedi.birth_year}</h2>
                              </div>
                            </div>
                          </div>
                                  
                                            
                                    </div>
                                );
                              }
                          
                            }
                          
              class Card8 extends Component {
                constructor(){
                super()     
               this.state = {
                jedi: [],
                 searchfield: ''
              }
                  }
          
                  componentDidMount(){
                    fetch('https://swapi.co/api/people/14/?format=json')
                    .then(response => { return response.json()})
                     .then(people => this.setState({jedi:people}))
                    // this.setState({characters:characters});
                  }
          
                render(){
                  let han = 'https://i.ebayimg.com/images/g/8gEAAOSw~oFXKg-I/s-l300.jpg'
                return (
                       <div className = 'charcards'>
                         <div>
                         <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={han}/>
                            </div>
                            <hr/>
                            <div class="flip-container">
                            <div class="flipper">
                              <div class="front">
                              <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
                              </div>
                              <div class="back">
                              <h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                                            <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                                            <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                                            <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
                              </div>
                            </div>
                          </div>
                                  
                                            
                                    </div>
                                );
                              }
                          
                            }
                          
                
              class Card9 extends Component {
                constructor(){
                super()     
               this.state = {
                jedi: [],
                 searchfield: ''
              }
                  }
          
                  componentDidMount(){
                    fetch('https://swapi.co/api/people/9/?format=json')
                    .then(response => { return response.json()})
                     .then(people => this.setState({jedi:people}))
                    // this.setState({characters:characters});
                  }
          
                render(){

                  let darth = 'https://cdnb.artstation.com/p/assets/images/images/001/703/915/large/andre-castro-composition3-2.jpg?1451322714'
                return (
                       <div className = 'charcards'>
                         <div>
                         <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ={darth}/>
                            </div>
                            <hr/>
                            <div class="flip-container">
	<div class="flipper">
		<div class="front">
    <h2  className = "name1 name2"> Name: {this.state.jedi.name}</h2>
		</div>
		<div class="back">
		<h2 className = 'height1 data data1 '>Height: {this.state.jedi.height}</h2>
                  <h2 className = 'mass1 data data1'> Mass: {this.state.jedi.mass}</h2>
                  <h2 className= 'haircolor data data1'> HairColor: {this.state.jedi.hair_color} </h2>
                  <h2 className= 'birthyear data data1'> BirthYear: {this.state.jedi.birth_year}</h2>
		</div>
	</div>
</div>
        
                  
          </div>
      );
    }

  }


                class Card10 extends Component {
                  constructor(){
                  super()     
                 this.state = {
                  jedi: [],
                   searchfield: ''
                }
                    }
            
                    componentDidMount(){
                      fetch('https://swapi.co/api/people/10/?format=json')
                      .then(response => { return response.json()})
                       .then(people => this.setState({jedi:people}))
                      // this.setState({characters:characters});
                    }
            
                  render(){
                    let obi = 'https://i.pinimg.com/originals/30/38/24/303824ba0619d1d47a808b455dd14503.jpg'
                  return (
                         <div className = 'charcards'>
                           <div>
                           <img className= 'pic obi'  alt = 'Obi Wan Kenobi' src= {obi}/>
                              </div>
                           
                              <hr/>
                              <div class="flip-container">
                              <div class="flipper">
                                <div class="front">
                                <h2  className = "name1"> Name: {this.state.jedi.name}</h2>
                                </div>
                                <div class="back">
                                <h2 className = 'height1 data'>Height: {this.state.jedi.height}</h2>
                                              <h2 className = 'mass1 data'> Mass: {this.state.jedi.mass}</h2>
                                              <h2 className= 'haircolor data'> HairColor: {this.state.jedi.hair_color} </h2>
                                              <h2 className= 'birthyear data'> BirthYear: {this.state.jedi.birth_year}</h2>
                                </div>
                              </div>
                            </div>
                                    
                                              
                                      </div>
                                  );
                                }
                            
                              }
                            

export{Card, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Card10}
