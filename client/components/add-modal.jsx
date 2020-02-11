import React from 'react';

function addModal(props) {

  return (
    <div className="d-flex justify-content-end">

      <div className={`position-fixed  w-50 h-50   ${props.showModal.displayNone ? 'd-none' : ''}`}>
        <div className="m-auto p-3">
          <div className="bg-warning rounded p-3 modal-message">
            <div className="d-flex">
            </div>
            <p className="text-center">You added {props.product.name} to your cart</p>
            <div className="btn-group w-100">
              <button className="btn btn-primary w-50"
                onClick={() => props.setView('catalog', {})}>Continue Shoping</button>
              <button className="btn btn-success text-white  w-50"
                onClick={() => props.setView('cart', {})}>View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default addModal;