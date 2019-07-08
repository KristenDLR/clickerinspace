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
    {/*./src/App.js Attempted import error: './component/Nav/Nav' does not contain a default export (imported as 'Nav').}
    {/* <Nav></Nav> */}
    {this.state.cards.map(cards => (
      <Card
      id={cards.id}
      key={cards.id}
      name={cards.name}
      image={cards.image}
      />
    ))}
  </Wrapper>
  );
}
}

export default App;
