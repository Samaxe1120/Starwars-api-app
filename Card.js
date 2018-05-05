  import React from 'react';
import './App.css'
import 'tachyons'
import {characters} from './characters.js'
import luke from './luke.jpg'


const Card = (characters) => {
   return (
           <div className = 'charcards'>
             <div>
             <img className= 'pic' alt = 'Luke Skywalker' src = {luke} />
                </div>
                <hr/>
         <h2 className = "name1">{characters.name}</h2>
          </div>
      );
    }

export default Card;

