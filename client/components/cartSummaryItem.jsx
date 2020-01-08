import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (
    <div className="d-flex justify-content mb-3 rounded ">
      <img className="photoSizer ml-5 m-3 rounded" src={props.product.image}></img>
      <div className="col-md-9 shadow">
        <h3>{props.product.name}</h3>
        <p>{realPrice}</p>
        <p>{props.product.shortDescription}</p>
        <button onClick={product => props.deleteFromCart(props.product)} type="button" className="btn btn-danger">Remove From Cart</button>
      </div>

    </div>
  );
}

export default CartSummaryItem;
