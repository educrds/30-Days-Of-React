import { useState, useEffect } from 'react';
import Button from './button';
import { Title } from './title';
import List from './list';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const changeTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav>
        <Title text={'Bob_'} />
        <ul>
          <List href={'/'} content={'About'} />
          <Button onClick={changeTheme} content={'Change Theme'} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
