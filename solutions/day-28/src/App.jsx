import Header from './components/Header';
import CreatePost from './components/AddPost';
import GlobalStyle from './styles/globalStyles';
import Post from './components/Post';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CreatePost />
      <Post />
    </>
  );
};

export default App;
