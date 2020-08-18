import React, { Fragment, useState, useEffect } from "react";
import Phrase from './components/Phrase';

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  padding: 1rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  margin-top: 3rem;
  transition: background-size .8s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    background-size: 600px
  }
`;

function App() {
  //states
  const [phrase, setPhrase] = useState({});

  //useEffects
  //get phrase when component is loaded
  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    const apiRequest = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await apiRequest.json();
    setPhrase(phrase[0]);
  };

  return (
    <Fragment>
      <Container>
        <Phrase 
          phrase={phrase}
        />
        <Button onClick={getApi}>Get some Breaking Bad Wisdom</Button>
      </Container>
    </Fragment>
  );
}

export default App;
