import { useState } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([
    {
      username: 'Anonymous',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cupiditate obcaecatiiure suscipit',
      isLiked: false,
    },
  ]);

  const addPost = content => {
    setPosts([...posts, { username: 'Anonymous', content, isLiked: false }]);
  };

  return { posts, addPost };
};

export default Post;
