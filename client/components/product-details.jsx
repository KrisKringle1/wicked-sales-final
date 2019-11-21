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
        <div>
          <div onClick={() => this.props.callback('catalog', {})} className="fas fa-arrow-left">  Back to Catalog</div>
          <div className="container">
            <img src={product.image} className="float-left fittedObj height-500 width-500"></img>
            <h1 className="d-flex">{product.name}</h1>
            <h2 className="d-flex">{realPrice}</h2>
            <p className="d-flex">{product.shortDescription}</p>
            <button onClick={() => this.props.addToCartCallBack(this.state.product)}>Add To Cart</button>
          </div>
          <div className="container-fluid">

            <p className="d-flex">{product.longDescription}</p>
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
