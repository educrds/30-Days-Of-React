import styled from "styled-components";

const GridStyle = styled.div`
  text-align: center;
  margin: 0 6vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Number = styled.span`
  border: 1px solid #fff;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  background-color: ${props => props.backgroundColor};
`;

export { GridStyle, Number };
