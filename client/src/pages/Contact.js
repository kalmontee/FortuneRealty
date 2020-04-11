import React, { Component } from 'react';
import ContactForm from '../components/ContactForm/index';

class Contact extends Component {
  state = {
    fullName: "",
    phoneNumber: "",
    email: "",
    comments: ""
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("It works");
    
    // Set a modal pop-up - letting the user know the form has been submitted.


    // Set the form empty after user submits the form.
    this.setState({
      fullName: "",
      phoneNumber: "",
      email: "",
      comments: ""
    });
  }

  render() {
    return (
      <>
        <ContactForm
          fullName={this.state.fullName}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          comments={this.state.comments}
          handleChange={this.handleChangeInput}
          handleSubmit={this.handleFormSubmit}
        />
      </>
    )
  }
}

export default Contact;