import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const TitleStyle = styled.h1`
  text-transform: capitalize;
  font-size: ${(props) => (props.subtitle ? "1.5rem" : "2.5rem")};
`;

export { Container, TitleStyle };
