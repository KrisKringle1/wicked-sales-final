import React from 'react';

function ProductListItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (

    <div className="card m-2 height-500">
      <img src={props.product.image} className="card-img-top fittingObj"></img>
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <h5 className="card-text">{realPrice}</h5>
        <p className="card-text">{props.product.shortDescription}</p>
      </div>
    </div>

  );
}

export default ProductListItem;
