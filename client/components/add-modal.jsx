import React from 'react';

function addModal(props) {

  return (
    <div className="d-flex justify-content-center">

      <div className={`position-fixed  justify-content-center w-50 h-100  intro-modal ${props.showModal.displayNone ? 'd-none' : ''}`}>
        <div className="m-auto p-3">
          <div className="bg-dark rounded p-3 modal-message">
            <div className="d-flex">
            </div>
            <p className="text-center">You added {props.product.name} to your cart</p>
            <div className="btn-group w-100">
              <button className="btn btn-secondary w-50"
                onClick={() => props.setView('catalog', {})}>Continue Shoping</button>
              <button className="btn text-white primary w-50"
                onClick={() => props.setView('cart', {})}>View Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default addModal;
