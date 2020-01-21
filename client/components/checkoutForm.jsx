import React from 'react';

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      name: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      creditCard: '',
      cardExpiration: '',
      cardCvv: '',
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
      <div className="container">
        <div onClick={() => this.props.setView('catalog', {})} style={{ cursor: 'pointer' }} className="fas fa-arrow-left back-button">  Back to Catalog</div>

        <form onSubmit={this.formSubmission}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input type="name" className="form-control" placeholder="Name" name="name" onChange={this.updateName}></input>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Credit Card</label>
            <input type="text" className="form-control" id="inputAddress" name="creditCard" placeholder="12345678" onChange={this.updateName}></input>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address </label>
            <input type="text" className="form-control" id="inputAddress2" name="shippingAddress" placeholder="1234 Main St" onChange={this.updateName}></input>
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
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>

              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip"></input>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Checkout</button>
        </form>

      </div >
    );
  }
}

export default CheckoutForm;
