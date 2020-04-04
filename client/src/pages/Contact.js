import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import ContactForm from '../components/ContactForm/index';

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    alert("Working");

    // Set the form empty after user submits the form.
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      comments: ""
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <ContactForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          comments={this.state.comments}
          handleChange={this.handleChangeInput}
          handleSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}

export default Contact;