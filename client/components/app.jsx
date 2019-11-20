import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList callback={this.setView} />
        </div>
      );
    }
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header />
          <ProductDetails view={this.state.view.params} callback={this.setView} />
        </div>

      );

    }

  }
}
