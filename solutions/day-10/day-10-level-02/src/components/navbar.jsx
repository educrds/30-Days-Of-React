import { RiMoonFill, RiNavigationFill, RiSunLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { Title } from './Title';
import Container from './Container';
import List from './List';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [{ theme, icon }, setMode] = useState({
    theme: 'light',
    icon: <RiMoonFill />,
  });

  const changeTheme = () => {
    theme === 'light'
      ? setMode({
          theme: 'dark',
          icon: <RiSunLine />,
        })
      : setMode({
          theme: 'light',
          icon: <RiMoonFill />,
        });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [icon]);

  return (
    <nav className='navbar'>
      <Container className='navbar-logo'>
        <Title text='Bob_' />
      </Container>
      <Container className={`navbar-links ${isOpen && 'open'}`}>
        <ul>
          <List href='/' content='About' />
          <List href='/' content='Skills' />
          <List href='/' content='Experience' />
          <List href='/' content='Contact' />
          <List className={'theme-button'} content={icon} onClick={changeTheme} />
        </ul>
      </Container>
      <Container className='navbar-toggle' onClick={() => setIsOpen(!isOpen)}>
        <TbMenu2 className={`${isOpen && 'open'}`} />
      </Container>
    </nav>
  );
}


export default Navbar;
