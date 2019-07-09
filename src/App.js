import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Nav from './component/Nav/Nav'
import Card from "./component/Card/Card";
import Wrapper from "./component/Wrapper/Wrapper";
import Nav from "./component/Nav/Nav";
import cards from "./cards.json";
import './App.css';


class App extends React.Component {
  //Setting this.state.cards to the cards json array
  state = {
    cards,
    clickedArray: [],
    topScore:0,
    score:0,
    message:"",
    shake:"false"
  };


//shuffle cards
shuffleUp = (pictureArray) => {
  for (let i = pictureArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    var temp = pictureArray[i];
    pictureArray[i]=pictureArray[j];
    pictureArray[j] = temp;
    //[pictureArray[i], pictureArray[j] = pictureArray[j], pictureArray[i]];
  }
  return pictureArray
}

clickCard = id => {
  // const shuffleCards = this.state.clickCard(cards);
  const shuffleCards = this.shuffleUp(cards);
  this.setState({cards: shuffleCards});
  //if clicked and image already clicked set this.state.score = 0, empty clickedArray
  if (this.states.clickedArray.includes(id)){
    this.setState({ score: 0, clicked: [], message: "You already clicked that picture, Game Over! Try again!", shake: "true"});
    console.log(this.score, this.clickedArray);
  }
  else {
    this.setState({
      clickedArray: this.state.clickedArray.concat([id]),
      score: this.state.score +1,
      message:"",
      shake:"false"
    });
  }

  //set top score
if(this.state.score > this.state.topScore){
  this.setState({ topScore: this.state.score});
}
}

  //Map over this.state.cards and render card component for each card object
render (){
  return (
    <Wrapper>
    <h1 className="title">Clicker in Space</h1>
    {/*./src/App.js Attempted import error: './component/Nav/Nav' does not contain a default export (imported as 'Nav').*/}
     <Nav></Nav>
    {this.state.cards.map(cards => (
      <Card
      id={cards.id}
      key={cards.id}
      name={cards.name}
      image={cards.image}
      onClick={this.clickCard}
      />
    ))}
  </Wrapper>
  );
}

//arrange card in random



}

export default App;
