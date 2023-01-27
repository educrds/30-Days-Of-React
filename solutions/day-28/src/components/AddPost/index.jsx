import { useState } from 'react';
import { PostContainer, PostContent, AddButton } from './styles';

const CreatePost = ({ onAdd }) => {
  const [post, setPost] = useState({
    username: 'Anonymous',
    content: '',
    isLiked: false,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setPost(prevPost => {
      return {
        ...prevPost,
        [name]: value,
      };
    });
  };

  const submitPost = e => {
    onAdd(post);
    setPost({
      username: 'Anonymous',
      content: '',
      isLiked: false,
    });
    e.preventDefault();
  };

  return (
    <>
      <PostContainer>
        <PostContent
          placeholder={'What do you is thinking?'}
          rows={4}
          name='content'
          autoFocus={true}
          type='text'
          value={post.content}
          onChange={handleChange}
          required
        />

        <AddButton onClick={submitPost}>Add</AddButton>
      </PostContainer>
    </>
  );
};

export default CreatePost;
