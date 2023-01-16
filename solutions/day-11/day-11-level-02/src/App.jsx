import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  // Crie uma referência para armazenar o elemento
  const elementRef = useRef(null);

  // Use o hook useEffect para adicionar o evento de mousemove ao elemento
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.addEventListener('mouseenter', moveAway);
    }
    // Remova o evento quando o componente é desmontado
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener('mouseenter', moveAway);
      }
    };
  }, [elementRef]);

  function moveAway(event) {
    // Obtenha as posições atuais do elemento
    let currentX = parseInt(elementRef.current.style.left);
    let currentY = parseInt(elementRef.current.style.top);
    console.log(currentX);

    // Obtenha as posições do cursor do mouse
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // Calcule a diferença entre as posições do cursor e do elemento
    let diffX = currentX - mouseX;
    let diffY = currentY - mouseY;

    // Adicione ou subtraia a diferença das posições atuais do elemento
    let newX = currentX - diffX;
    let newY = currentY - diffY;

    // Atualize as posições x e y do elemento
    elementRef.current.style.left = newX + 'px';
    elementRef.current.style.top = newY + 'px';
  }

  return (
    <div ref={elementRef} style={{ backgroundColor: '#61dbfc', padding:'10px 5px',  position: 'absolute', top: '0', left: '0' }}>
      30 Days of React
    </div>
  );
}

export default App;
