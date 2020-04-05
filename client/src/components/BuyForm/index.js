import React from 'react';
import { Container } from '../Grid/Grid';
import './buyForm.css';

const BuyForm = (props) => {
  return (
    <Container>
      <section className="form-builder">
        <h3>Fill Out The Form Below</h3>
        <br />
        <form onSubmit={(event) => props.handleSubmit(event)}>
          <div className="form-group">
            <label className="labelFormGroup">What type of property do you wish?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Single family.. Commercial.. Condominium.. Multiple Family Residential.. Lot/land.."
              value={props.property}
              name="property"
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">What is your desired location?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Miami? New York City?"
              name="location"
              value={props.location}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Price range you are looking for?</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="price"
              value={props.price}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Number of bathrooms?</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="numOfBathrooms"
              value={props.numOfBathrooms}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">When do you like to move in?</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pick an estimated date"
              name="date"
              value={props.date}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Describe the home of your dreams and the features you would like to have</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="description"
              value={props.description}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
              name="name"
              value={props.name}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="JohnDoe@example.com"
              name="email"
              value={props.email}
              onChange={props.handleChange} />
          </div>

          <div className="form-group">
            <label className="labelFormGroup">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="phoneNumber"
              value={props.phoneNumber}
              onChange={props.handleChange} />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
          />
        </form>
        <br />
      </section>
    </Container>
  )
}

export default BuyForm;