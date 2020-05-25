
import React from 'react';
import IntroModal from './intro-modal';

function Header(props) {

  let cartItemCount = 0;

  for (let index = 0; index < props.cartItemCount.length; index++) {
    cartItemCount += props.cartItemCount[index].quantity;
  }

  return (

    <div className=" text-white d-flex header mb-3">
      <div className="container">
        <div className=" d-flex justify-content-center">
          <div className="fa fa-beer m-1 fa-2x icon"></div>
          <h2 className="ml-1">Get Beer Here</h2>
        </div>
      </div>

      <div className="p-2 d-flex">
        <h6 className="mt-3 cart" onClick={() => props.callback('cart', {})} > {cartItemCount} Item{cartItemCount === 1 ? null : 's'}</h6>
        <div className="fa fa-shopping-cart ml-2 mt-3 fa-lg icon"></div>
      </div>
      <IntroModal showIntroModal={props.showIntroModal}
        toggleIntroModal={props.toggleIntroModal} />
    </div>

  );
}

export default Header;
