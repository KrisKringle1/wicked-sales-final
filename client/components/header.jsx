import React from 'react';

function Header(props) {

  return (

    <div className="sticky-top text-white py-2 header">
      <div className="container justify-content-between d-flex">
        <div className="d-flex">
          <div className="fa fa-beer m-1 fa-2x icon"></div>
          <h2 className="ml-1">Get Beer Here</h2>
        </div>
        <div className="d-flex">
          <h6 className="mt-3 cart" onClick={() => props.callback('cart', {})} > {props.cartItemCount.length} Items</h6>
          <div className="fa fa-shopping-cart ml-2 mt-3 fa-lg icon"></div>
        </div>
      </div>
    </div>

  );
}

export default Header;
