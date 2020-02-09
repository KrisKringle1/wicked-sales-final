import React from 'react';
import CartSummaryItem from './cartSummaryItem';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      removingItem: {}
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    if (this.state.showModal.show) {
      this.setState({
        showModal: {
          show: false,
          displayNone: false
        }
      });
      setTimeout(() => {
        this.setState({
          showModal: {
            show: false,
            displayNone: true
          }
        });
      }, 750);
    } else {
      this.setState({
        showModal: {
          show: true,
          displayNone: false
        }
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const realPrice = this.props.calculateTotal();
    const products = this.props.cartInfo.map(product => {

      return <CartSummaryItem product={product}
        key={product.productId}

        callback={this.props.callback}
        deleteFromCart={product => this.props.removeCallback(product)}
        addToCart={this.props.addToCart} />;
    });

    if (this.props.cartInfo.length === 0) {
      return (
        <div className="container py-5">
          <div className="mb-3">

            <a href="#" onClick={() => this.props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
            </a>
          </div>

          <h1 className="fade-in slide-in">Cart</h1>

          <h2 className="fade-in slide-in">There are no items in your cart!</h2>

        </div>

      );
    } else {
      return (
        <div className="container py-5">
          <div className="mb-3">

            <a href="#" onClick={() => this.props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
            </a>
          </div>
          <h1 className="fade-in slide-in">Cart</h1>

          {products}

          <div className="d-md-flex justify-content-between slide-in">
            <h3 className="md-my-auto- text-black-50 slide-in">Total: ${realPrice}</h3>

            <button className="btn btn-success primary my-auto slide-in" onClick={() => this.props.callback('checkout', {})}>Checkout</button>

          </div>

        </div >

      );
    }
  }
}

export default CartSummary;
