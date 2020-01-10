import React from 'react';

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.updateName = this.updateName.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
  }

  updateName(event) {

    this.setState({ [event.target.name]: event.target.value });

  }

  formSubmission() {
    event.preventDefault();
    const cart = {
      name: this.state.name,
      // email: this.state.email,
      // phone: this.state.phone,
      creditCard: this.state.creditCard,
      // creditCardCVV: this.state.creditCardCVV,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(cart);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmission}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>name</label>
              <input type="name" className="form-control" id="inputEmail4" placeholder="name" name="name" onChange={this.updateName}></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Credit Card</label>
            <input type="text" className="form-control" id="inputAddress" name="creditCard" placeholder="1234 Main St" onChange={this.updateName}></input>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address </label>
            <input type="text" className="form-control" id="inputAddress2" name="shippingAddress" placeholder="Apartment, studio, or floor" onChange={this.updateName}></input>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity"></input>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip"></input>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"></input>
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Checkout</button>
        </form>

      </div >
    );
  }
}

export default CheckoutForm;
