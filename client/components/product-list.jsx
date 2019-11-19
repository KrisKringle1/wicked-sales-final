import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(data => data.json())
      .then(jsonData => {
        const newProduct = this.state.products.concat(jsonData);
        this.setState({ products: newProduct });
      });
  }

  render() {
    return (
      <div className="container d-flex flex-wrap">
        <div className="row">
          {this.state.products.map((object, index) =>
            <div key={index} className="col-md-4">
              <ProductListItem product={object} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
