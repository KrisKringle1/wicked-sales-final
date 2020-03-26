import React from 'react';

function introModal(props) {

  return (

    <div className={`position-fixed h-100 w-100   overlay ${props.showIntroModal.displayNone ? 'd-none' : 'd-flex'}`}>
      <div className="m-auto p-3">
        <div className="bg-dark rounded p-3 modal-message">

          <h5 className="text-center ">Welcome to Get Beer Here!</h5>
          <div className="d-flex">
          </div>
          <p className="text-center modal-message">Get Beer Here! is a digital store that was created strictly for demonstration purposes.  By clicking the button below, you understand that no real purchases will be made, no payment processing will be accepted, and personal details should not be used in checkout. Thank you!</p>
          <div className="btn-group w-100">
            <button className="btn btn-danger w-100"
              onClick={() => props.toggleIntroModal()}>Accept</button>
          </div>
        </div>
      </div>
    </div>

  );

}

export default introModal;
