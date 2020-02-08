import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (
    <div>
      <div className="container mb-3">
        <div className="row border bg-white rounded p-3 position-relative item-card ">
          <div className="d-flex justify-content-between">
            <h1 className="d-flex ">{props.product.name}</h1>
          </div>
          <div className="col-md-8 m-auto ">
            <img src={props.product.image} className="fittingObj"></img>

          </div>
          <div className="col-md-8 m-auto">

            <h2 className="text-black-50 ">{realPrice}</h2>
            <p className="">{props.product.shortDescription}</p>

            <button onClick={product => props.deleteFromCart(props.product)} type="button" className="btn btn-danger float-right">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
