import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;
  return (

    <div className="container mb-3 item-card bg-white imageRounder">

      <div className=" d-flex  ">

        <h1 className="mr-auto p-2">{props.product.name}</h1>

        <i className="far fa-times-circle cancel-button pointer p-2" onClick={() => {
          props.productToRemove(props.product);
          props.toggleModal();
        }} />

      </div>

      <div className="d-flex">
        <img src={props.product.image} className="fittingObj mr-auto p-2" />
        <div className="p-2">

          <div className="d-flex justify-content-end">

            <h2 className="  productPrice">{realPrice}</h2>

          </div>

          <div>
            <p >{props.product.longDescription}</p>
          </div>
        </div>

      </div>
      <div className="d-flex justify-content-end">
        <div className="quantity">Quantity: </div>
        <div className=" btn-group mx-3 my-auto border border-dark rounded ">
          <div className="d-flex">
            <button className="btn btn-light rounded-light "
              onClick={() => {
                if (props.product.quantity > 1) {
                  props.addToCart(props.product, '-');
                } else {
                  props.productToRemove(props.product);
                  props.toggleModal();
                }
              }}>
              <i className="fas fa-minus m-auto" />
            </button>
          </div>

          <div className="d-flex p-3">
            <h5 className="m-auto">{props.product.quantity}</h5>
          </div>

          <div className="d-flex">
            <button className="btn btn-light rounded-left"
              onClick={() => {
                props.addToCart(props.product, '+');
              }}>
              <i className="fas fa-plus m-auto" />

            </button>

          </div>
        </div>
      </div>

    </div>

  );
}

export default CartSummaryItem;
