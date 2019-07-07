import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Nav from './component/Nav/Nav'
import Card from "./component/Card/Card";
import Wrapper from "./component/Wrapper/Wrapper";
import cards from "./cards.json";
import './App.css';


function App() {
  return (
    <Wrapper>
    <h1 className="title">Cards</h1>
    <Card
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
  </Wrapper>
  );
}

export default App;
