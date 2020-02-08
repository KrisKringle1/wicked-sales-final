import React from 'react';
import CartSummaryItem from './cartSummaryItem';

function CartSummary(props) {
  const totalPrice = props.cartInfo.reduce((accum, item) => (accum + item.price), 0);
  const realPrice = `$${(totalPrice / 100).toFixed(2)}`;
  if (props.cartInfo.length === 0) {
    return (
      <div className="container py-5">
        <div className="mb-3">

          <a href="#" onClick={() => props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
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

          <a href="#" onClick={() => props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
          </a>
        </div>
        <h1 className="fade-in slide-in">Cart</h1>

        {props.cartInfo.map((product, index) => (
          <CartSummaryItem
            key={index}
            product={product}
            callback={props.callback}
            deleteFromCart={product => props.removeCallback(product)}

          />

        ))}
        <div>

        </div>

        <div className="d-md-flex justify-content-between slide-in">
          <h3 className="md-my-auto- text-black-50 slide-in">Total: {realPrice}</h3>

          <button className="btn btn-success primary my-auto slide-in" onClick={() => props.callback('checkout', {})}>Checkout</button>

        </div>

      </div >

    );
  }
}

export default CartSummary;
