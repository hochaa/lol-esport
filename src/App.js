import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'lol-esport'
    }
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var myInit = { method: 'GET',
               headers: {'Access-Control-Allow-Origin' : '*'},
               mode: 'cors',
               cache: 'default' };

    /*axios.get(proxyUrl+'https://www.wikipedia.org/w/api.php', {
      params : {
        action: 'query',
        list: 'search',
        srsearch: 'Craig%20Noone',
        format: 'jsonfm'

    }})
    .then(res => {
      console.log(res);
    }) */
    //https://lol.gamepedia.com/
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => console.log(users))
    
    fetch('https://wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json')
    .then(res => console.log(res))
  }

  render() {
    return (
    <span>{this.state.title}</span>
    );
  }
}

export default App;
