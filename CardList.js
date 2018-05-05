import React from 'react';
import {Card, Card2, Card3, Card4, Card5, Card6, cardComponent} from './Card';
import {characters} from './characters.js'
import Luke from './luke.jpg'
 const CardList = ({ characters }) => {
    return(
        <div>
    {
        characters.map((user, i) =>{
            return(
                <div>
                <Card 
                pic = {<img src= {Luke}/>}
            name = {characters[i].name}
             />,
                 
                </div>
            )
         
                  
            
    })
        
}
        
   </div>

    );
    
}
    
export default CardList;