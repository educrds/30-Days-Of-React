import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Container from './components/container';
import Services from './components/services';
import Experience from './components/experience';

const App = () => {
  return (
    <Container className={'App'}>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Services />
      <Experience />
    </Container>
  );
};

export default App;
