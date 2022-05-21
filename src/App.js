import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./component/Card/Card";
import Wrapper from "./component/Wrapper/Wrapper";
import Nav from "./component/Nav/Nav";
import cards from "./cards.json";
import Directions from "./component/Directions/Directions";

class App extends React.Component {
  //Setting this.state.cards to the cards json array
  constructor(props){
    super(props)
    this.state = {
      cards,
      clickedArray: [],
      topScore: 0,
      score: 0,
      message: "",
      shake: "false"
    };
  }

  //shuffle cards
  shuffleUp = pictureArray => {
    console.log("need to shuffle")
    for (let i = pictureArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      var temp = pictureArray[i];
      pictureArray[i] = pictureArray[j];
      pictureArray[j] = temp;
      //[pictureArray[i], pictureArray[j] = pictureArray[j], pictureArray[i]];
    }
    return pictureArray;
  };

  clickCard = id => {
    console.log("===========");
    // this.setState({cards: shuffleCards});
    //if clicked and image already clicked set this.state.score = 0, empty clickedArray
    if (!this.state.clickedArray.includes(id)) {
      this.setState({
        clickedArray: [...this.state.clickedArray, id],
        score: this.state.score + 1,
        message: "",
        shake: "false"
      });
      console.log(this.state.clickedArray)
      console.log(cards.id)
      console.log(this.state.score)
      this.shuffleUp(cards)
    } else {
      alert("You Lose.")
      this.shuffleUp(cards)
      this.setState({
        clickedArray: [],
        score: 0,
        message: "",
        shake: "true"
      });
    }

    //set top score
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  };

  //Map over this.state.cards and render card component for each card object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score}/>
        <Container>
          <Row>
            <Directions></Directions>
            </Row>
            <Row>
            
              
                {this.state.cards.map(cards => {return (
                  <Col
                  xs={12}
                  m={6}
                  lg={4}
                  onClick={() => {
                    this.clickCard(cards.id)
                  }}
                >
                  <Card
                    id={cards.id}
                    key={cards.id}
                    name={cards.name}
                    image={cards.image}
                    
                  />
             </Col>
            )})}
             
          </Row>
        </Container>
      </Wrapper>
    );
  }

}

export default App;
