import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.props = props;
  }

  componentDidMount() {
    fetch(`/api/products?productId=${this.props.view.productId}`)
      .then(data => data.json())
      .then(jsonData => {
        this.setState({ product: jsonData });

      });
  }

  render() {

    const product = this.state.product;
    if (product) {
      const realPrice = `$${(product.price / 100).toFixed(2)}`;
      return (

        <div className="container py-5">
          <div className="mb-3">

            <a href="#" onClick={() => this.props.callback('catalog', {})} style={{ cursor: 'pointer' }} className="mb-3"><i className="fas fa-chevron-circle-left" />  Back to Catalog
            </a>
          </div>

          <div className="container py-3 bg-white">
            <div className="row mb-3">
              <div className="col-md-5">
                <img src={product.image} className="float-left fittedObj col-sm"></img>
              </div>
              <div className="col-md-7">

                <h1 className="d-flex ">{product.name}</h1>
                <h2 className="d-flex ">{realPrice}</h2>
                <p className="d-flex ">{product.shortDescription}</p>
                <p className="d-flex">{product.longDescription}</p>
                <button className="btn btn-primary" onClick={() => this.props.addToCart(this.state.product, '+')}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>

      );
    }
    return (
      null
    );
  }
}

export default ProductDetails;
