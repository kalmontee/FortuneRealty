import React from 'react';
// import ContactJumbotron from '../Jumbotron/Jumbotron';
import { Row } from '../Grid/Grid'
import './contactForm.css';

const ContactForm = (props) => {
  return (
    <section className="contactContainer">
      <div className="box-1">
        <div className="control">
          <h1 id="title">Contact Us</h1>
          <p id="pTag-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab architecto amet et corrupti
          libero! In deserunt nesciunt eos officia cupiditate, facere exercitationem nulla eum accusantium natus,
      tenetur, hic recusandae.</p>
        </div>
      </div>

      <div className="box-2">
        <form className="contactForm" onSubmit={(event) => props.handleSubmit(event)}>
          <Row flex>
            <label className="contactFormLabel">Full Name</label>
            <input
              type="text"
              className="contactFormInput"
              placeholder="John Doe"
              name="fullName"
              value={props.fullName}
              onChange={props.handleChange} />
          </Row>

          <Row flex>
            <label className="contactFormLabel">Phone Number</label>
            <input
              type="text"
              className="contactFormInput"
              placeholder="000-000-0000"
              name="phoneNumber"
              value={props.phoneNumber}
              onChange={props.handleChange} />
          </Row>

          <Row flex>
            <label className="contactFormLabel">Email</label>
            <input
              type="text"
              className=" contactFormInput"
              placeholder="JohnDoe@example.com"
              name="email"
              value={props.email}
              onChange={props.handleChange} />
          </Row>

          <Row flex>
            <label className="contactFormLabel">Comments/Questions</label>
            <textarea
              cols="30"
              rows="10"
              name="comments"
              value={props.comments}
              onChange={props.handleChange}
              className="contactFormTextarea">
            </textarea>
          </Row>

          <Row flex>
            <input
              type="submit"
              value="Submit"
              id="contactFormSubmit"
              className="btn btn-success"
            />
          </Row>

        </form>
      </div>
    </section>
  )
}

export default ContactForm;