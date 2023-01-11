import { useState, useEffect } from 'react';
import Button from './button';
import Title from './title';
import Link from './link';

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
          <Link href={'/'} content={'About'} />
          <Button onClick={changeTheme} content={'Change Theme'} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
