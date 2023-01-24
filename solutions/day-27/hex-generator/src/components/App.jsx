import { useEffect } from 'react';
import ColorContainer from './ColorContainer';
import useColors from '../hooks/useColors';
import '../style.css';

const ColorBox = () => {
  const { colors, generateColors } = useColors();

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <>
      <button onClick={generateColors}>Generate colors</button>
      <ColorContainer colors={colors} />
    </>
  );
};

export default ColorBox;
