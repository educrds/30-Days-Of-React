import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const date = new Date();
  const year = date.getFullYear();

  const changeTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='App'>
      <header>
        <h1>Welcome to 30 days of React</h1>
        <h3>Getting Started React</h3>
        <h4>Javascript Library</h4>
        <h4>Eduardo Cardoso</h4>
      </header>
      <div className='content'>
        <h4>Prerequisite to get started React Js:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg' />
        <div>
          <button onClick={changeTheme}>Change background</button>
        </div>
      </div>
      <footer>Copyright {year}</footer>
    </div>
  );
};

export default App;
