import React from 'react';

function introModal(props) {

  return (
    <div className="d-flex justify-content-center">

      <div className={`position-fixed  justify-content-center w-50 h-100  intro-modal ${props.showIntroModal.displayNone ? 'd-none' : ''}`}>
        <div className="m-auto p-3">
          <div className="bg-dark rounded p-3 modal-message">
            <h5 className="text-center ">Welcome to Get Beer Here!</h5>
            <div className="d-flex">
            </div>
            <p className="text-center">Get Beer Here! is a digital store that was created strictly for demonstration purposes.  By clicking the button below, you understand that no real purchases will be made, no payment processing will be accepted, and no personal details should not be used in checkout. Thank you!</p>
            <div className="btn-group w-100">
              <button className="btn btn-danger w-100"
                onClick={() => props.toggleIntroModal()}>Accept</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default introModal;
