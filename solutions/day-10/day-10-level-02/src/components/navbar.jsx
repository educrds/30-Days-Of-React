import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useState, useContext } from 'react';
import { TbMenu2 } from 'react-icons/tb';  
import { Title } from './TitleVariants';
import Container from './Container';
import List from './List';
import { ThemeContext } from '../contexts/theme-context';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <nav>
      <Container>
        <Title text='Bob_' />
      </Container>
      <Container className={`navbar-links ${isOpen && 'open'}`}>
        <ul>
          <List href='#about-section' content='About' />
          <List href='#skills-section' content='Skills' />
          <List href='#projects-section' content='Projects' />
          <List href='#experience-section' content='Experience' />
          <List href='#contact-section' content='Contact' />
          <List
            className='toggle-button'
            content={theme === 'dark' ? <RiSunLine /> : <RiMoonFill />}
            onClick={handleThemeChange}
          />
        </ul>
      </Container>
      <Container className='navbar-toggle' onClick={() => setIsOpen(!isOpen)}>
        <TbMenu2 className={`${isOpen && 'open'}`} />
      </Container>
    </nav>
  );
}

export default Navbar;
