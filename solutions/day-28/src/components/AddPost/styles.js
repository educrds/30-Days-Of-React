import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 5vh 0;

  svg {
    font-size: 2.7rem;
    flex: 0.5;
  }
`;

const AddPost = styled.textarea`
  border: none;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1.5vh 1vw;
  width: 100%;
  font-size: 0.95rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
  cursor: pointer;
  
  &:hover {
    transform: translateY(-7px);
    transition: transform 0.4s ease-in-out;
  }
`;

export { PostContainer, AddPost, AddButton };
