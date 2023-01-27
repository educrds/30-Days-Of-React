import styled from 'styled-components';
import { iconHover, square } from '../../styles/globalStyles';

const Container = styled.div`
  margin-bottom: 4vh;
  min-height: 170px;
  ${square};

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

  & svg:hover{
    ${iconHover};
  }

`;
export { Container, Row };
