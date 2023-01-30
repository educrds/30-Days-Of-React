import Header from './components/Header';
import CreatePost from './components/AddPost';
import { GlobalStyle } from './styles/globalStyles';
import Post from './components/Post';
import { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = newPost => {
    setPosts(prevPosts => {
      return [...prevPosts, newPost];
    });
  };

  const deletePost = id => {
    setPosts(prevPosts => {
      return prevPosts.filter((_, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
      <GlobalStyle />
      <Header />
      <CreatePost onAdd={addPost} />
      {posts.map((postItem, index) => {
        return (
            <Post
              key={index}
              id={index}
              content={postItem.content}
              username={postItem.username}
              onDelete={deletePost}
              onEdit={editPost}
            />
        );
      })}
    </>
  );
};

export default App;
