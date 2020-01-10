import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (
    <div className="d-flex justify-content mb-3 rounded container">
      <img className="photoSizer ml-5 m-3 rounded" src={props.product.image}></img>
      <div className="col-md-9 shadow card">
        <h3>{props.product.name}</h3>
        <p>{realPrice}</p>
        <div >{props.product.shortDescription}
          <button onClick={product => props.deleteFromCart(props.product)} type="button" className="btn btn-danger float-right">Remove From Cart</button>
        </div>
      </div>

    </div>
  );
}

export default CartSummaryItem;
