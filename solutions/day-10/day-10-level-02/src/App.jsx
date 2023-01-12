import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import { FaLayerGroup,FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';
import Container from './components/container';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <About />
      <Container className='projects'>
        <Projects text={'Projects completed'} number={'198'} icon={<FaLayerGroup />} />
        <Projects text={'Cup of coffe'} number={'1100'} icon={<FaCoffee />} />
        <Projects text={'Lines code'} number={'10.000'} icon={<FaCode />} />
        <Projects text={'Satisfied clients'} number={'200'} icon={<FaUserFriends />} />
      </Container>
    </div>
  );
}

export default App;
