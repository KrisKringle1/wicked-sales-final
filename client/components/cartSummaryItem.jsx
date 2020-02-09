import React from 'react';

function CartSummaryItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;
  return (

    < div >
      <div className="container mb-3">
        <div className="row border bg-white rounded p-3 position-relative item-card ">
          <div className="d-flex justify-content-between w-100">
            <h1 className="d-flex ">{props.product.name}</h1>
            <i className="far fa-times-circle cancel-button pointer" onClick={product => props.deleteFromCart(props.product)} />

          </div>
          <div className="col-md-4 m-auto ">
            <img src={props.product.image} className="fittingObj "></img>

          </div>
          <div className="col-md-8 m-auto ">

            <h2 className="text-black-50 ">{realPrice}</h2>
            <p className="">{props.product.shortDescription}</p>
            <div className="d-flex">
              <h5 className="m-auto ">Quantity: </h5>
              <div className="d-flex btn-group mx-3 my-auto border border-dark rounded">
                <div className="d-flex">

                  <button className="btn btn-light rounded-light"
                    onClick={() => {
                      if (props.product.quantity > 1) {
                        props.addToCart(props.product, '-');
                      } else {
                        props.deleteFromCart(props.product);
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

        </div >

      </div>

    </div>
  );
}

export default CartSummaryItem;
