import styled from "styled-components";

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  background-color: #eee;
  padding: 4vh 2vw;
  margin: 3vh 0;
  border-radius: 10px;
  color: #232323;

  img {
    border-radius: 100%;
    width: 200px;
  }
`;

const ContainerName = styled.div`
  justify-content: center;

  h2 {
    display: inline;
  }
  .iconCheck {
    color: #2acfcf;
    font-size: 20px;
  }
`;

const LogInfo = styled.div`
  margin: 5vh 0 0 0;
  justify-content: center;

  p {
    display: inline;
    padding: 0 0.4vw;
  }
`;

export { Container, ContainerName, LogInfo };
