## Solution (Day 16) 
## Level 01
### What is higher order function? 
Higher order function é uma função que recebe outra função como argumento ou retorna outra função.
### What is Higher Order Component? 
Higher Order Component é um componente em React que recebe outro componente como argumento e retorna um novo componente com novas funcionalidades.
### What is the difference between higher order function and higher order component? 
Higher order function é uma função que lida com outras funções, enquanto Higher Order Component é um componente que lida com outros componentes.
### A higher order component can allow us to enhance a component. (True or False)
Verdadeiro, um Higher Order Component permite-nos melhorar um componente existente.
## Level 02

```js
import React, { useState } from 'react';

const withInputHandler = (WrappedComponent) => {
  return (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    return (
      <WrappedComponent
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        {...props}
      />
    );
  }
};
export default withInputHandler;
```
### Utilizando:
```js
import withInputHandler from  './withInputHandler'; import  MyComponent  from  './MyComponent'; const  MyComponentWithInputHandler = withInputHandler(MyComponent);
```