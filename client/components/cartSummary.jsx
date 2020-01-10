import React from 'react';
import CartSummaryItem from './cartSummaryItem';

function CartSummary(props) {
  const totalPrice = props.cartInfo.reduce((accum, item) => (accum + item.price), 0);
  const realPrice = `$${(totalPrice / 100).toFixed(2)}`;
  return (
    <div>
      <div className="col-sm-12 d-flex justify-content-between ">
        <div className='d-flex text-black mt-3 ml-5'
          onClick={() => props.callback('catalog', {})}
          style={{ cursor: 'pointer' }}>
          <div className="fa fa-arrow-left py-2 fa-lg icon"></div>
          <h4 className="ml-1">Back to Catalog</h4>
        </div>
        <div className="d-flex text-black">
          <h2 className="mr-3 mt-2">My Cart</h2>
        </div>
        <div className="d-flex text-black mr-5">
          <button className="btn btn-success m-2  d-flex " onClick={() => props.callback('checkout', {})}>Checkout</button>
          <h2 className="ml-auto p-2">{realPrice}</h2>
        </div>
      </div>

      <div className="container ">

        {props.cartInfo.map((product, index) => (
          <CartSummaryItem
            key={index}
            product={product}
            callback={props.callback}
            deleteFromCart={product => props.removeCallback(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default CartSummary;
