import React from 'react';
import './App.css'
import 'tachyons'
import {characters} from './characters.js'
import luke from './luke.jpg'



  const cardComponent = characters.map((user, i)=>{
    return <Card key={i} id = {characters[i].id}/> })

  //  const CardList = (characters) =>
  //  {
  //    return(

  //    )
  //  } 

  
const Card = (characters) => {
   return (
           <div className = 'charcards'>
             <div>
             <img className= 'pic' alt = 'Luke Skywalker'src ={luke}/>
                </div>
                <hr/>
         <h2 className = "name1">{characters.name}</h2>
        </div>
      );
    }


    const Card2 = (characters) => {
      return (
             <div className = 'charcards'>
               <div>
               <img className= 'pic obi'  alt = 'Obi Wan Kenobi'src ='https://i.pinimg.com/originals/30/38/24/303824ba0619d1d47a808b455dd14503.jpg'/>
                  </div>
                  <hr/>
           <h2 className = "name1">{characters.name}</h2>
          </div>
        );
      }


      const Card3 = (characters) => {
        return (
               <div className = 'charcards'>
                 <div>
                 <img className= 'pic yoda' alt = 'Master Yoda' src ='https://i.pinimg.com/236x/29/22/b9/2922b9ecbd47b6625b5f74b9ef52f9d2--star-wars-yoda-star-wars-fan-art.jpg'/>
                    </div>
                    <hr/>
             <h2 className = "name1">{characters.name}</h2>
            </div>
          );
        }
  

        const Card4 = (characters) => {
          return (
                 <div className = 'charcards'>
                   <div>
                   <img className= 'pic vader' alt = 'Darth Vader' src ='http://media.moddb.com/images/groups/1/9/8071/darth_vader_by_eseagal-d5w9kag.jpg'/>
                      </div>
                      <hr/>
               <h2 className = "name1">{characters.name}</h2>
              </div>
            );
          }
    
      

            const Card5 = (characters) => {
              return (
                     <div className = 'charcards'>
                       <div>
                       <img className= 'pic Han' alt = 'Han Solo' src ='https://instagram.com/p/-IEXM_LtQT/media/?size=m'/>
                          </div>
                          <hr/>
                   <h2 className = "name1">{characters.name}</h2>
                  </div>
                );
              }
  

              const Card6 = (characters) => {
                return (
                       <div className = 'charcards'>
                         <div>
                         <img className= 'pic Boba' alt = 'Boba Fett' src ='https://i.pinimg.com/originals/db/12/58/db1258a26112c36490fb5dee797fb7a7.jpg'/>
                            </div>
                            <hr/>
                     <h2 className = "name1">{characters.name}</h2>
                    </div>
                  );
                }
    

export {cardComponent, Card, Card2, Card3, Card4, Card5, Card6, }
