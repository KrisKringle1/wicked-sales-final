import React from 'react';

function ProductListItem(props) {
  const realPrice = `$${(props.product.price / 100).toFixed(2)}`;

  return (

    <div className="col-md-6 col-lg-4 d-flex align-items-stretch p-0 ">

      < div onClick={() => props.callback('details', { productId: props.product.productId })
      } className="card mb-4 pointer productCard item-card " >
        <img src={props.product.image} className="card-img-top fittingObj"></img>
        <div className="card-body text-center">
          <h5 className="card-title">{props.product.name}</h5>
          <h5 className="card-text font-weight-bold">{realPrice}</h5>
          <p className="card-text font-italic">{props.product.shortDescription}</p>
        </div>
      </div >
    </div>

  );
}

export default ProductListItem;
