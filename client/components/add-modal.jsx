import React from 'react';

function addModal(props) {

  return (

    <div className={`sticky-top position-fixed  w-100 h-100 overlay ${props.showModal.displayNone ? 'd-none' : 'd-flex'}`}>
      <div className="m-auto p-3">
        <div className={'bg-white rounded p-3 modal-message '}>
          <h5 className="text-center ">You added {props.product.name} to your cart</h5>
          <div className="btn-group w-100 slide-in">
            <button className="btn btn-secondary w-50"
              onClick={() => props.setView('catalog', {})}>Continue Shopping</button>
            <button className="btn btn-danger w-50"
              onClick={() => props.setView('cart', {})}>View Cart</button>
          </div>
        </div>
      </div>
    </div >
  );

}

export default addModal;
