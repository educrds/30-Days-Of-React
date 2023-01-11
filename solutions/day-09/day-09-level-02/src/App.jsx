import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Season from './Season';
import Time from './Time';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Season />}></Route>
        <Route path='/02' element={<Time />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
