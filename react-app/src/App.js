import React, { Component } from 'react';
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
    const products = localStorage.getItem('products');

    console.log(products)
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
