import React from 'react';
import { PostContainer, AddPost, AddButton } from './styles';

const CreatePost = () => {
  return (
    <>
      <PostContainer>
        <AddPost placeholder='What do you thinking?' rows={4} />
        <AddButton onClick={() => alert('click')}>Add</AddButton>
      </PostContainer>
    </>
  );
};

export default CreatePost;
