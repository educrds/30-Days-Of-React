import './styles/css/style.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import TechList from './components/TechList';
import Form from './components/Form';
import { ThemeContext } from './contexts/theme-context';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className='wrapper'>
          <Navbar />
          <Main />
          <About />
          <TechList />
          <Projects />
          <Services />
          <Experience />
          <Form />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
