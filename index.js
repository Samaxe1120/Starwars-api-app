import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
import CardList from './CardList'
import {Card, Card2, Card3, Card4, Card5, Card6, cardComponent} from './Card';
import registerServiceWorker from './registerServiceWorker';
import {characters} from './characters.js'



ReactDOM.render(
    <div>  
    <App/>
      
   , </div>, document.getElementById('root'));
registerServiceWorker();
