import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import Carousel from './carousel';
import CheckoutForm from './checkoutForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.toggleIntroModal = this.toggleIntroModal.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.toggleOrderModal = this.toggleOrderModal.bind(this);
    this.noOrderModal = this.noOrderModal.bind(this);
    this.state = {
      cart: [],
      view: {
        name: 'catalog',
        params: {}
      },
      showIntroModal: {
        show: true,
        displayNone: false
      },
      showOrderModal: {
        show: true,
        displayNone: false
      }
    };
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  noOrderModal() {
    this.setState({
      showOrderModal: {
        show: true,
        displayNone: false
      }
    });
  }

  toggleOrderModal() {

    this.setState({
      showOrderModal: {
        show: true,
        displayNone: true
      }
    }
    );
  }

  toggleIntroModal() {
    this.setState({
      showIntroModal: {
        show: false,
        displayNone: false
      }
    });
    setTimeout(() => {
      this.setState({
        showIntroModal: {
          show: false,
          displayNone: true
        }
      });
    }, 750);
  }

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems() {
    const request = '/api/cart';
    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ cart: data }))
      .catch(error => console.error('There was an error:', error.message));
  }

  addToCart(product, operator) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.productId, operator: operator })
    };
    fetch('/api/cart', req)
      .then(response => response.json())
      .then(data => {
        this.setState();
        this.getCartItems();
      });
  }

  calculateTotal() {
    const itemsArray = this.state.cart;
    let itemTotal = 0;
    for (let cartIndex = 0; cartIndex < itemsArray.length; cartIndex++) {
      itemTotal += (itemsArray[cartIndex].price * itemsArray[cartIndex].quantity);
    }
    itemTotal = (itemTotal / 100).toFixed(2);
    return itemTotal;
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

  placeOrder({ name, creditCard, shippingAddress }) {
    const required = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, creditCard, shippingAddress })

    };
    fetch('api/orders', required)
      .then(productData => productData.json())
      .then(jsonProductData => {
        this.setState({ cart: [] });

      });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart}
            view={this.state.view}
            callback={this.setView}
            showIntroModal={this.state.showIntroModal}
            toggleIntroModal={this.toggleIntroModal}
          />

          <Carousel />
          <ProductList callback={this.setView} />
        </div>
      );
    }
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart}
            callback={this.setView}
            view={this.state.view}
            showIntroModal={this.state.showIntroModal}
            toggleIntroModal={this.toggleIntroModal}
          />
          <ProductDetails view={this.state.view.params}
            callback={this.setView}

            addToCart={this.addToCart} />

        </div>

      );

    }

    if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart}
            callback={this.setView}
            view={this.state.view}
            showIntroModal={this.state.showIntroModal}
            toggleIntroModal={this.toggleIntroModal}
          />
          <CartSummary cartInfo={this.state.cart}
            callback={this.setView}

            removeCallback={product => this.removeFromCart(product)}
            addToCart={this.addToCart}
            calculateTotal={this.calculateTotal} />
        </div>
      );
    }

    if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart}
            callback={this.setView}
            view={this.state.view}
            showIntroModal={this.state.showIntroModal}
            toggleIntroModal={this.toggleIntroModal}
          />
          <CheckoutForm placeOrder={this.placeOrder}
            setView={this.setView}
            toggleOrderModal={this.toggleOrderModal}
            calculateTotal={this.calculateTotal}
            showOrderModal={this.state.showOrderModal}
            noOrderModal={this.noOrderModal} />
        </div>
      );
    }

  }
}
