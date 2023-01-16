import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import About from './components/about';
import Projects from './components/projects';
import Container from './components/container';
import Services from './components/services';
import Experience from './components/experience';

const App = () => {
  const menu = document.getElementById('menu'),
    chevron = document.getElementById('chevron');

  const toggleDropdown = () => {
    menu.classList.toggle('open');
    chevron.innerHTML = !menu.classList.contains('open') ? 'expand-more' : 'close';
  };

  const handleMainButtonClicked = () => {
    alert('main button clicked');
  };

  const handleMenuButtonClicked = () => {
    toggleDropdown();
    alert('menu button clicked');
  };

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
