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
        <div className="card-deck d-flex ">
          {this.state.products.map((object, index) =>

            <ProductListItem key={index} product={object} callback={this.props.callback} />

          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
