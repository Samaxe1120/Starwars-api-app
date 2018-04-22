import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import {Card, Card2, Card3, Card4, Card5, Card6, cardComponent} from './Card';
import registerServiceWorker from './registerServiceWorker';
import {characters} from './characters.js'



ReactDOM.render(
    <div>  
    <App />
    
    <cardComponent/>,

    <Card 
       name= {characters[0].name}
    />,

    <Card2
    name = {characters[1].name} 
    />,
    
    <Card3 
    name= {characters[2].name} />,
    
    <Card4
    name = {characters[3].name}/>,
    
    <Card5
    name= {characters[4].name}/>
    
    <Card6
    name= {characters[5].name}/>

       </div>, document.getElementById('root'));
registerServiceWorker();
