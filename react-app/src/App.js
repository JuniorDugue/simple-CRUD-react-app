import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
   name: 'iPad',
   price: 200 
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  componentWillMount() {
    localStorage.getItem('products');
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

      </div>
    );
  }
}

export default App;
