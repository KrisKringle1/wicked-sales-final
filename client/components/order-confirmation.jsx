import React from 'react';

function OrderConfirmation(props) {

  return (
    <div className={`position-fixed h-100 w-100   overlay ${props.showOrderModal.displayNone ? 'd-flex' : 'd-none'}`}>
      <div className="m-auto p-3">
        <div className="bg-warning rounded p-3 modal-message">

          <h5 className="text-center ">Thank you for your order!</h5>
          <div className="d-flex">
          </div>
          <div className="btn-group w-100">
            <button className="btn btn-secondary text-white  my-auto slide-in" onClick={() => {
              props.setView('catalog', {});
              this.setState({
                showOrderModal: {
                  show: true,
                  displayNone: false
                }
              });
            }}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default OrderConfirmation;
