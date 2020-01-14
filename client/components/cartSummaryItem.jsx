import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (
    <div>
      <div className="container py-3 bg-white">
        <div className="row mb-3">
          <div className="col-md-5">
            <img src={props.product.image} className="float-left fittedObj  col-sm"></img>
          </div>
          <div className="col-md-7">

            <h1 className="d-flex ">{props.product.name}</h1>
            <h2 className="d-flex ">{realPrice}</h2>
            <p className="d-flex ">{props.product.shortDescription}</p>
            <p className="d-flex">{props.product.longDescription}</p>
            <button onClick={product => props.deleteFromCart(props.product)} type="button" className="btn btn-danger float-right">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
