import './styles/css/style.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Container from './components/Container';
import Services from './components/Services';
import Experience from './components/Experience';
import TechList from './components/TechList';
import Form from './components/Form';

const App = () => {
  return (
    <Container className={'App'}>
      <Navbar />
      <Main />
      <About />
      <TechList />
      <Projects />
      <Services />
      <Experience />
      <Form />
    </Container>
  );
};

export default App;
