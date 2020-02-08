import React from 'react';

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      state: '',
      creditCard: '',
      cardExpiration: '',
      cardCvv: '',
      month: '',
      year: '',
      shippingAddress: '',
      isValidated: {
        name: true,
        phone: true,
        email: true,
        address1: true,
        address2: true,
        city: true,
        state: true,
        zip: true,
        creditCard: true,
        cardCvv: true,
        month: true,
        year: true,
        shippingAddress: true
      }

    };
    this.updateName = this.updateName.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
  }

  updateName(event) {
    const isValidated = {
      name: true,
      phone: true,
      email: true,
      address1: true,
      address2: true,
      city: true,
      state: true,
      zip: true,
      creditCard: true,
      cardExpiration: true,
      cardCvv: true,
      month: true,
      year: true,
      shippingAddress: true

    };

    switch (event.target.name) {
      case 'zip':
      case 'phone':
      case 'creditCard':
      case 'cardCvv':
        if (/^[0-9]*$/.test(event.target.value)) {
          this.setState({ [event.target.name]: event.target.value });
        }
        break;
      case 'name':
      case 'address1':
      case 'address2':
        if (event.target.value.indexOf('  ') === -1) {
          this.setState({ [event.target.name]: event.target.value });

        }
        break;
      default:
        this.setState({ [event.target.name]: event.target.value });

    }

    this.setState({ isValidated });

  }

  formSubmission(event) {
    event.preventDefault();
    const isValidated = JSON.parse(JSON.stringify(this.state.isValidated));
    const nameRegex = new RegExp(/^[a-zA-Z ]+$/);
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!nameRegex.test(this.state.name) || this.state.name.length < 5) {
      isValidated.name = false;
    }
    if (this.state.phone.length < 10) {
      isValidated.phone = false;
    }
    if (!emailRegex.test(this.state.email)) {
      isValidated.email = false;
    }
    if (this.state.shippingAddress.length < 5) {
      isValidated.shippingAddress = false;
    }
    if (this.state.city.length < 3) {
      isValidated.city = false;
    }
    if (this.state.zip.length < 5) {
      isValidated.zip = false;

    }
    if (this.state.creditCard.length < 16) {
      isValidated.creditCard = false;
    }
    if (this.state.month.length < 2) {
      isValidated.month = false;
    }

    if (this.state.year.length < 2) {
      isValidated.year = false;
    }

    if (this.state.cardCvv.length < 3) {
      isValidated.cardCvv = false;
    }

    if (this.state.state.length < 1) {
      isValidated.state = false;
    }

    if (Object.values(isValidated).indexOf(false) === -1) {

      const cart = {
        name: this.state.name.trim(),
        // email: this.state.email,
        // phone: this.state.phone,
        creditCard: this.state.creditCard.trim(),
        // creditCardCVV: this.state.creditCardCVV,
        shippingAddress: this.state.shippingAddress
      };
      this.props.placeOrder(cart);
    } else {
      this.setState({
        name: this.state.name.trim(),
        address1: this.state.address1.trim(),
        city: this.state.city,
        isValidated: isValidated
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div onClick={() => this.props.setView('catalog', {})} style={{ cursor: 'pointer' }} className="fas fa-arrow-left back-button">  Back to Catalog</div>

        <form onSubmit={() => this.formSubmission(event)}
          onChange={() => this.updateName(event)}
          noValidate >
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Name</label>
              <input type="name"
                className={`form-control ${this.state.isValidated.name ? ' ' : 'is-invalid'}`}
                placeholder="Name"
                name="name"
                onChange={() => this.updateName(event)}
                onSubmit={() => this.formSubmission(event)}>

              </input>
              <div className="invalid-feedback">
                <small>Missing Name</small>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phone">Phone</label>
                <input type="tel"
                  autoComplete="new-password"
                  name="phone"
                  className={`form-control ${this.state.isValidated.phone ? ' ' : 'is-invalid'}`}
                  onChange={() => this.updateName(event)}
                  value={this.state.phone}
                  minLength="10"
                  maxLength="11" />
                <div className="invalid-feedback">
                  <small>Missing or invalid phone number.</small>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="name"
                className={`form-control ${this.state.isValidated.email ? ' ' : 'is-invalid'}`}
                placeholder="Email"
                name="email"
                onChange={() => this.updateName(event)}
                onSubmit={() => this.formSubmission(event)}>

              </input>
              <div className="invalid-feedback">
                <small>Missing Email</small>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress1">Address 1</label>
            <input type="text"
              className={`form-control ${this.state.isValidated.shippingAddress ? ' ' : 'is-invalid'}`}
              id="inputAddress2"
              name="shippingAddress"
              placeholder="1234 Main St"
              onChange={() => this.updateName(event)}>

            </input>
            <div className="invalid-feedback">
              <small>Missing Address</small>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text"
              className="form-control"
              id="inputAddress2"
              name="shippingAddress2"
              placeholder="1234 Main St"
              onChange={() => this.updateName(event)}>

            </input>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="name"
                className={`form-control ${this.state.isValidated.city ? ' ' : 'is-invalid'}`}
                placeholder="City"
                name="city"
                onChange={() => this.updateName(event)}
                onSubmit={() => this.formSubmission(event)}>

              </input>
              <div className="invalid-feedback">
                <small>Missing City</small>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className={`form-control ${this.state.isValidated.state ? ' ' : 'is-invalid'}`} name="state">
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
              <div className="invalid-feedback">
                <small>Missing State</small>
              </div>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="name"
                className={`form-control ${this.state.isValidated.zip ? ' ' : 'is-invalid'}`}
                placeholder="Zip Code"
                name="zip"
                onChange={() => this.updateName(event)}
                onSubmit={() => this.formSubmission(event)}>

              </input>
              <div className="invalid-feedback">
                <small>Missing Zip Code</small>
              </div>
            </div>
          </div>
          <div className="form-group">
            <h5>Payment Information</h5>

          </div>
          <div className="form-row p-3 border rounded mb-3">
            <div className="form-group col-md-6">
              <label htmlFor="creditCard">Credit Card</label>
              <input type="tel"
                className={`form-control ${this.state.isValidated.creditCard ? ' ' : 'is-invalid'}`}
                id="inputAddress"
                name="creditCard"
                placeholder="12345678"
                minLength="16"
                maxLength="16"
                value={this.state.creditCard}
                onChange={() => this.updateName(event)}
              ></input>
            </div>
            <div className="invalid-feedback">
              <small>Missing Credit Card</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputState">Month</label>
            <select className={`form-control ${this.state.isValidated.month ? '' : 'is-invalid'}`}
              name="month">
              <option defaultValue hidden></option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <div className="invalid-feedback">
              <small>Select a month.</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputState">Year</label>
            <select className={`form-control ${this.state.isValidated.year ? '' : 'is-invalid'}`}
              name="year">
              <option defaultValue hidden></option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
            <div className="invalid-feedback">
              <small>Select a year.</small>
            </div>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">CVV</label>
            <input type="tel"
              autoComplete="new-password"
              name="cardCvv"
              className={`form-control ${this.state.isValidated.cardCvv ? '' : 'is-invalid'}`}
              onChange={() => this.updateName(event)}
              value={this.state.cardCvv}
              minLength="3"
              maxLength="4" />
            <div className="invalid-feedback">
              <small>Missing or invalid CVV.</small>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Checkout</button>

        </form >

      </div>
    );
  }
}

export default CheckoutForm;
