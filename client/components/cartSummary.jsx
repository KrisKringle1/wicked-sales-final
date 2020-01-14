import React from 'react';
import CartSummaryItem from './cartSummaryItem';

function CartSummary(props) {
  const totalPrice = props.cartInfo.reduce((accum, item) => (accum + item.price), 0);
  const realPrice = `$${(totalPrice / 100).toFixed(2)}`;
  if (props.cartInfo.length === 0) {
    return (
      <div>
        <div>
          <div className="content-div">

            <div className="container py-1 ">
              <div onClick={() => props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="fas fa-arrow-left">  Back to Catalog</div>

              <h2 className=" d-flex justify-content-end py-0">{realPrice}</h2>

              <div className=" text-black d-flex justify-content-end">

                <div>
                  <button className="btn btn-success  " disabled="true" onClick={() => props.callback('checkout', {})}>Checkout</button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div className="content-div">

            <div className="container py-1 ">
              <div onClick={() => props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="fas fa-arrow-left">  Back to Catalog</div>

              <h2 className=" d-flex justify-content-end py-0">{realPrice}</h2>

              <div className=" text-black d-flex justify-content-end">

                <div>
                  <button className="btn btn-success  " onClick={() => props.callback('checkout', {})}>Checkout</button>
                </div>

              </div>

            </div>

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
      </div >

    );
  }
}

export default CartSummary;
