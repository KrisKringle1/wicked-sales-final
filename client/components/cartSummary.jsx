import React from 'react';
import CartSummaryItem from './cartSummaryItem';
import RemoveModal from './remove-modal';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      removingItem: {},
      productToRemove: null
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.productToRemove = this.productToRemove.bind(this);
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
      }, 100);
    } else {
      this.setState({
        showModal: {
          show: true,
          displayNone: false
        }
      });
    }

  }

  productToRemove(cartItem) {
    this.setState({ productToRemove: cartItem });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const realPrice = this.props.calculateTotal();
    const products = this.props.cartInfo.map(product => {

      return <CartSummaryItem product={product}
        key={product.productId}
        toggleModal={this.toggleModal}
        showModal={this.state.showModal}
        callback={this.props.callback}
        productToRemove={this.productToRemove}

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
          <div className="d-flex justify-content-center">
            <h1>Cart</h1>

          </div>
          <div className="d-flex justify-content-center">
            <h2 className="">There are no items in your cart!</h2>
          </div>

        </div>

      );
    } else {
      return (
        <>
          <div className="d-flex bd-highlight mb-3 flex-row-reverse">

            <div className="d-inline-flex  bd-highlight ">
              <div className="container bg-white p-3 imageRounder">
                <div className="">
                  <h3 className=" ">Total: ${realPrice}</h3>
                </div>
                <div className="d-flex justify-content-center mx-4">
                  <button className="btn btn-success primary my-auto " onClick={() => this.props.callback('checkout', {})}>Checkout</button>
                </div>

              </div>
            </div>
          </div>
          <div className="container ">

            <div className="d-flex justify-content-around">
              <h1 className="">Cart</h1>
            </div>
            <div className="mr-auto p-2 bd-highlight">

              <a href="#" onClick={() => this.props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
              </a>
            </div>

            {products}
            <RemoveModal cartItem={this.state.productToRemove}
              toggleModal={this.toggleModal}
              removeFromCart={this.props.removeCallback}
              showModal={this.state.showModal} />

          </div >

        </>

      );
    }
  }
}

export default CartSummary;
