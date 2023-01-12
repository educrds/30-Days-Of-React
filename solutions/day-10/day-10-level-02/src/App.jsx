import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Container from './components/container';
import Services from './components/services';

const App = () => {
  return (
    <Container className={'App'}>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Services />
    </Container>
  );
};

export default App;
