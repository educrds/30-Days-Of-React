function handleCopyClick(e) {
  const colorValue = e.target.innerText;
  e.target.innerText = 'copiado';
  navigator.clipboard.writeText(colorValue);
  setTimeout(() => {
    e.target.innerText = colorValue;
  }, 1500);
}

const ColorContainer = ({ colors }) => {
  return (
    <div className='color-container'>
      {colors.map((color, index) => (
        <div
          key={index}
          className='color-box'
          onClick={handleCopyClick}
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorContainer;
