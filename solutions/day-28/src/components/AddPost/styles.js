import styled from 'styled-components';
import { iconHover, square } from '../../styles/globalStyles';

const PostContainer = styled.div`
  margin: 5vh 0;

  svg {
    font-size: 2.7rem;
    flex: 0.5;
  }
`;

const PostContent = styled.textarea`
  border: none;
  width: 100%;
  font-size: 0.95rem;
  ${square};

  &:focus-visible {
    outline: none;
  }
`;

const AddButton = styled.button`
  border: none;
  border-radius: 0.3rem;
  background-color: #023047;
  padding: 1vh 2vw;
  color: #fff;
  margin: 2vh 0;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    ${iconHover};
  }
`;

export { PostContainer, PostContent, AddButton };
