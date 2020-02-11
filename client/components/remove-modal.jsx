import React from 'react';

function RemoveModal(props) {

  if (props.cartItem) {

    return (
      <div className={`sticky-top position-fixed  w-100 h-100 overlay ${props.showModal.displayNone ? 'd-none' : 'd-flex'}`}>
        <div className="m-auto p-3">
          <div className={'bg-white rounded p-3 modal-message '}>
            <h5 className="text-center ">{props.cartItem.name}</h5>
            <div>
              <img src={props.cartItem.img} className={'w-75 d-block m-auto '} />
            </div>
            <p className="text-center slide-in">Are you sure you want to remove this from your cart?</p>
            <div className="btn-group w-100 slide-in">
              <button className="btn btn-secondary w-50"
                onClick={() => {

                  props.toggleModal();
                }}>Cancel</button>
              <button className="btn btn-danger w-50"
                onClick={() => {
                  props.removeFromCart(props.cartItem);
                  props.toggleModal();
                }}>Remove</button>
            </div>
          </div>
        </div>
      </div >
    );
  } else {
    return null;
  }

}

export default RemoveModal;
