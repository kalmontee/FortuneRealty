import React, { Component } from 'react';
// import { Container } from '../components/Grid/Grid';
import NavBar from '../components/NavBar/NavBar';
import buyHomeImg from '../assets/images/buyHome.png';
import BuyForm from '../components/BuyForm/index';

class Buy extends Component {
  state = {
    property: "",
    location: "",
    price: "",
    numOfBathrooms: "",
    date: "",
    description: "",
    name: "",
    email: "",
    phoneNumber: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  submitFormHandler = event => {
    event.preventDefault();
    alert("Workig");

    this.setState({
      property: "",
      location: "",
      price: "",
      numOfBathrooms: "",
      date: "",
      description: "",
      name: "",
      email: "",
      phoneNumber: ""
    });
  }

  render() {
    const styles = {
      imgStyle: {
        width: "100%",
        height: "500px"
      },

      articleStyle: {
        padding: "30px 200px",
        fontFamily: "Raleway, sans-serif",
        fontSize: "20px",
        lineHeight: "1.7",
        color: "rgb(112, 112, 112)"
      }
    }

    return (
      <section>
        <NavBar />
        <div className="intro">
          <img
            src={buyHomeImg}
            style={styles.imgStyle}
            alt="Buy home img step by step" />
        </div>

        <article style={styles.articleStyle}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium quasi quam ex consequuntur maiores vel ducimus a culpa repellendus temporibus iste accusantium eligendi numquam, officia praesentium nisi sapiente placeat. Doloribus error
            accusamus iure, animi obcaecati corporis iste sapiente. Quibusdam eligendi nam provident optio alias voluptatibus eveniet esse magnam temporibus vitae perspiciatis exercitationem ratione, fugit autem non et aperiam dicta! Nulla quos facere
            vel amet reprehenderit aliquam ad quod. Doloremque vitae iusto reprehenderit totam commodi quis natus qui recusandae eaque esse modi rerum, placeat.
          </p>
        </article>

        <BuyForm
          property={this.state.property}
          location={this.state.location}
          price={this.state.price}
          numOfBathrooms={this.state.numOfBathrooms}
          date={this.state.date}
          description={this.state.description}
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          handleChange={this.handleInputChange}
          handleSubmit={this.submitFormHandler}
        />
      </section>
    )
  }
}

export default Buy;