import React from 'react';
import IntroModal from './intro-modal';

function Header(props) {

  let cartItemCount = 0;

  for (let index = 0; index < props.cartItemCount.length; index++) {
    cartItemCount += props.cartItemCount[index].quantity;
  }

  return (

    <div className="sticky-top text-white py-2 header">

      <div className="container justify-content-between d-flex">
        <div className="d-flex">
          <div className="fa fa-beer m-1 fa-2x icon"></div>
          <h2 className="ml-1">Get Beer Here</h2>
        </div>
        <div className="d-flex">
          <h6 className="mt-3 cart" onClick={() => props.callback('cart', {})} > {cartItemCount} Item{cartItemCount === 1 ? null : 's'}</h6>
          <div className="fa fa-shopping-cart ml-2 mt-3 fa-lg icon"></div>
        </div>

      </div>
      <IntroModal showIntroModal={props.showIntroModal}
        toggleIntroModal={props.toggleIntroModal} />
    </div>

  );
}

export default Header;
