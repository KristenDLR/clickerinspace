import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Nav from './component/Nav/Nav'
import Card from "./component/Card/Card";
import Wrapper from "./component/Wrapper/Wrapper";
import Nav from "./component/Nav/Nav";
import cards from "./cards.json";
import './App.css';


class App extends Component {
  //Setting this.state.cards to the cards json array
  state = {
    cards
  };


  //Map over this.state.cards and render card component for each card object
render (){
  return (
    <Wrapper>
    {/* <h1 className="title">Clicker in Space</h1> */}
    <Nav> Clicker in Space</Nav>
    {this.state.card.map(cards => (
      <Card
      id={cards.id}
      key={cards.id}
      name={cards.name}
      image={cards.image}
      />
    ))}
    {/* <Card
      name={cards[0].name}
      image={cards[0].image}
    />
    <Card
      name={cards[1].name}
      image={cards[1].image}
    />
    <Card
      name={cards[2].name}
      image={cards[2].image}
    />
    <Card
      name={cards[2].name}
      image={cards[2].image}
    /> */}
  </Wrapper>
  );
}
}

export default App;
