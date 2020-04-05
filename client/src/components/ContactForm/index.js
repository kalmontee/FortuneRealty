import React from 'react';
import ContactJumbotron from '../Jumbotron/Jumbotron';
import { Container } from '../Grid/Grid'
import './contactForm.css';

const ContactForm = (props) => {
  return (
    <ContactJumbotron>
      <Container>
        <h1 className="display-4 contactFormTitle">Interested? Let's Talk!</h1>
        <form onSubmit={(event) => props.handleSubmit(event)}>
          <div className="row">
            <div className="col">
              <label className="contactFormLabel">First Name</label>
              <input
                type="text"
                className="form-control contactFormInput"
                placeholder="John"
                name="firstName"
                value={props.firstName}
                onChange={props.handleChange} />
            </div>

            <div className="col">
              <label className="contactFormLabel">Last Name</label>
              <input
                type="text"
                className="form-control contactFormInput"
                placeholder="Doe"
                name="lastName"
                value={props.lastName}
                onChange={props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="contactFormLabel">Phone Number</label>
              <input
                type="text"
                className="form-control contactFormInput"
                placeholder=""
                name="phoneNumber"
                value={props.phoneNumber}
                onChange={props.handleChange} />
            </div>

            <div className="col">
              <label className="contactFormLabel">Email</label>
              <input
                type="text"
                className="form-control contactFormInput"
                placeholder="JohnDoe@example.com"
                name="email"
                value={props.email}
                onChange={props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="contactFormLabel">Comments</label>
              <textarea
                cols="30"
                rows="10"
                name="comments"
                value={props.comments}
                onChange={props.handleChange}
                className="contactFormTextarea">
              </textarea>
            </div>
          </div>

          <div id="contactFormButton">
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary"
            />
          </div>
        </form>
      </Container>
    </ContactJumbotron>
  )
}

export default ContactForm;