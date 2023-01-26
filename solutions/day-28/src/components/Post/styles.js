import styled from 'styled-components';

const Container = styled.div`
  background: #f8f9fa;
  padding: 1.5vh 1vw;
  border-radius: 0.5rem;
  margin-bottom: 4vh;
  min-height: 170px;

  .profile-icon {
    font-size: 2.5rem;
    color: #bbb;
    margin-right: 1vw;
  }
`;

const Row = styled.div`
  display: flex;
  padding: 0 0.5vw;
  align-items: center;
  margin: 0 0 2vh;

  svg {
    font-size: 1.5rem;
    margin-right: 3vw;
  }
  svg:hover {
    cursor: pointer;
    transform: translateY(-3px);
    transition: transform 0.4s ease-in-out;
  }
`;
export { Container, Row };
