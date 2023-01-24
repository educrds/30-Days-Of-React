import { useState, useEffect } from 'react';

const useColors = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  const generateColors = () => {
    setColors([
      ...Array(49)
        .fill()
        .map(() => generateHexColor()),
    ]);
  };

  const generateHexColor = () => `#${Math.random().toString(16).slice(2, 8).toUpperCase()}`;

  return { colors, generateColors };
};

export default useColors;
