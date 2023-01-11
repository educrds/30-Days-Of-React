import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('Loading...');

  useEffect(() => {
    const timer = setTimeout(() => setGreeting('Ola mundo!'), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;
