import NumberGenerator from "./pages/NumberGenerator";
import ColorGenerator from "./pages/ColorGenerator";
import WorldPopulation from "./pages/WorldPopulation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NumberGenerator />}></Route>
        <Route path="/color-generator" element={<ColorGenerator />}></Route>
        <Route path="/world-population" element={<WorldPopulation />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
