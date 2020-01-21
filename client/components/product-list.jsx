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
      <div className="container py-5">
        <div className="card-deck">
          {this.state.products.map((object, index) =>
            <div key={index} className="col-md-6 col-lg-4 d-flex align-items-stretch p-2">
              <ProductListItem product={object} callback={this.props.callback} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
