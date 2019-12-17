import React from 'react';

function Header(props) {

  return (
    <div className="col-sm-12 sticky-top bg-dark text-white d-flex justify-content-between">
      <div className="d-flex display-5">
        <div className="fa fa-dollar-sign m-1 fa-2x icon"></div>
        <h2 className="ml-1">Wicked Sales</h2>
      </div>
      <div className="d-flex">
        <h6 className="mt-3" onClick={() => props.callback('cart', {})} > {props.cartItemCount.length} Items</h6>
        <div className="fa fa-shopping-cart ml-2 mt-3 fa-lg icon"></div>
      </div>
    </div>

  );
}

export default Header;
