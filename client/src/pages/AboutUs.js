import React, { Component } from 'react';
import { Container, AboutContainer } from '../components/Grid/Grid';
import { AboutInfo, Agents, AgentsContainer, AgentsInfo } from '../components/AboutUsInfo/index';
import CarlosHeadshot from '../assets/images/Carlos-Headshot.JPG';
import RubiHeadshot from '../assets/images/Rubi-Headshot.jpg';

class About extends Component {

  RubiDivHandler = () => this.props.history.push('/about-us/Rubi+Jimenez');

  CarlosDivHandler = () => this.props.history.push('/about-us/Carlos+Mejia');

  // https://www.oberlo.com/wp-content/uploads/2016/02/Mobile-App-Performance-Data-and-Business-Tools-_-Apptopia.jpg

  render() {
    return (
      <>
        <AboutContainer>
          <Container fluid>
            <AboutInfo>
              <h1 id="about-title">About</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laudantium quasi quam ex consequuntur maiores vel ducimus a culpa repellendus temporibus iste accusantium eligendi numquam, officia praesentium nisi sapiente placeat. Doloribus error
                accusamus iure, animi obcaecati corporis iste sapiente. Quibusdam eligendi nam provident optio alias voluptatibus eveniet esse magnam temporibus vitae perspiciatis exercitationem ratione, fugit autem non et aperiam dicta! Nulla quos facere
                vel amet reprehenderit aliquam ad quod. Doloremque vitae iusto reprehenderit totam commodi quis natus qui recusandae eaque esse modi rerum, placeat.
                <br />
                Doloribus error
                accusamus iure, animi obcaecati corporis iste sapiente. Quibusdam eligendi nam provident optio alias voluptatibus eveniet esse magnam temporibus vitae perspiciatis exercitationem ratione, fugit autem non et aperiam dicta! Nulla quos facere
                vel amet reprehenderit aliquam ad quod. Doloremque vitae iusto reprehenderit totam commodi quis natus qui recusandae eaque esse modi rerum, placeat.
              </p>
            </AboutInfo>

            <Agents>
              <h1 id="about-title">Meet Our Agents</h1>
              <AgentsContainer >
                <AgentsInfo AgentsDivHandler={this.RubiDivHandler}>
                  <img src={RubiHeadshot} />
                  <h4 className="agentsName">Rubi Jimenez</h4>
                  <p className="agents-description">
                    vel amet reprehenderit aliquam ad quod. Doloremque vitae iusto reprehenderit totam commodi quis natus qui recusandae eaque esse modi rerum, placeat.
                  </p>
                </AgentsInfo>

                <AgentsInfo AgentsDivHandler={this.CarlosDivHandler}>
                  <img src={CarlosHeadshot} />
                  <h4 className="agentsName">Carlos Mejia</h4>
                  <p className="agents-description">
                    vel amet reprehenderit aliquam ad quod. Doloremque vitae iusto reprehenderit totam commodi quis natus qui recusandae eaque esse modi rerum, placeat.
                  </p>
                </AgentsInfo>
              </AgentsContainer>
            </Agents>
          </Container>
        </AboutContainer>
      </>
    )
  }
}

export default About;