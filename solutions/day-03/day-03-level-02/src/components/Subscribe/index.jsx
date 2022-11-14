import React from "react";
import Container from "./styles";
import Input from "../Input";
import Button from "../Button";

const Subscribe = () => {
  return (
    <Container>
      <h1>Subscribe</h1>
      <p>Sign Up with your email address to receive news and updates.</p>
      <Input placeholder="First name"></Input>
      <Input placeholder="Last name"></Input>
      <Input placeholder="Email"></Input>
      <Button name="Subscribe"></Button>
    </Container>
  );
};

export default Subscribe;
