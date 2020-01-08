import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import Carousel from './carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(cartData => cartData.json())
      .then(jsonData => {

        this.setState({ cart: jsonData });
      });
  }

  addToCart(product) {
    const required = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('api/cart', required)
      .then(productData => productData.json())
      .then(jsonProductData => {
        this.setState({ cart: this.state.cart.concat(jsonProductData) });
      });
  }

  removeFromCart(product) {
    const required = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)

    };
    fetch('api/cart', required)
      .then(productData => productData.json())
      .then(jsonProductData => {
        const array = [...this.state.cart];
        const newArray = array.filter(filteredProducts => filteredProducts.cartItemId !== product.cartItemId);
        this.setState({ cart: newArray });
      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} callback={this.setView} />
          <Carousel />
          <ProductList callback={this.setView} />
        </div>
      );
    }
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} callback={this.setView} />
          <ProductDetails view={this.state.view.params} callback={this.setView} addToCartCallBack={this.addToCart} />

        </div>

      );

    }

    if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} callback={this.setView} />
          <CartSummary cartInfo={this.state.cart} callback={this.setView} removeCallback={product => this.removeFromCart(product)} />
        </div>
      );
    }

  }
}
