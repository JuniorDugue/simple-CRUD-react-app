import React, { Component } from 'react';
import './App.css';

import ProductItem from './Components/ProductItem';

const products = [
  {
   name: 'iPad',
   price: 200 
  },
  {
    name: 'iPhone',
    price: 650
  },
  {
    name: 'iPod',
    price: 75
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    this.getProducts();
  }
  
  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));
  
    this.setState({ products });
  }

  render() {
    return (
      <div>
        <h1>Products Manager</h1>
        {
          this.state.products.map(product => {
            return (
              <ProductItem 
                key={product.name}
                name={product.name}
                price={product.price}
              />
            );
          })
        }
      </div>   
    );
  }
}

export default App;
