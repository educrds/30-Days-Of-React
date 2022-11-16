import React from "react";
import { Container, TitleStyle } from "./styles";

const Title = ({ subtitle }) => {
  return (
    <Container>
      <TitleStyle>30 days of react</TitleStyle>
      <TitleStyle subtitle>{subtitle}</TitleStyle>
    </Container>
  );
};

export default Title;
