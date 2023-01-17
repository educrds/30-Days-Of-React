## Solution (Day 13 - Level 01)

### 1.  What is a controlled input?

Em React, uma entrada controlada (controlled input) é um elemento de entrada (como um campo de texto ou caixa de seleção) cujo valor é controlado pelo estado do componente. Isso significa que o valor do elemento de entrada é definido pelo estado do componente e qualquer atualização no valor do elemento de entrada afeta o estado do componente.

Em uma entrada controlada, o componente tem o controle sobre o valor e comportamento do elemento de entrada. O componente usa o estado para armazenar o valor do elemento de entrada e usa eventos, como onChange, para atualizar o estado quando o valor do elemento de entrada muda. O componente então renderiza o elemento de entrada com o valor do estado.

Aqui está um exemplo de uma entrada controlada em React:
```js
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input 
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}
```
Neste exemplo, o componente tem um estado inputValue que armazena o valor do input. A função handleChange é chamada quando o valor do input muda e atualiza o estado com o novo valor. O componente então renderiza o input com o valor do estado atualizado, criando um input controlado.

Em geral é recomendado o uso de entradas controladas, pois é mais fácil de garantir a integridade dos dados e fazer validação dos campos. Entradas não controladas podem ser úteis em algumas situações específicas, mas geralmente não são recomendadas.

### 2.  What is an uncontrolled input?

Uma entrada não controlada (uncontrolled input) em React é um elemento de entrada (como um campo de texto ou caixa de seleção) cujo valor não é controlado pelo estado do componente. Isso significa que o valor do elemento de entrada é definido diretamente pelo valor do DOM e qualquer atualização no valor do elemento de entrada não afeta o estado do componente.

Em uma entrada não controlada, o valor do elemento de entrada é obtido diretamente do DOM e não é gerenciado pelo componente. Isso é contrário a uma entrada controlada, onde o componente tem o controle sobre o valor e comportamento do elemento de entrada.

Aqui está um exemplo de uma entrada não controlada em React:

```js
import React from 'react';

function UncontrolledInput() {
  return (
    <div>
      <input />
    </div>
  )
}
```
Neste exemplo, o componente não tem um estado que armazena o valor do input, e o valor do input é gerenciado diretamente pelo DOM.

### 3.  How do you get a content of a certain HTML element in React ?
Existem algumas formas de obter o conteúdo de um elemento HTML no React:

**useRef():** o useRef pode ser usado para criar uma referência para um elemento HTML e acessá-lo diretamente para obter seu conteúdo.
**useState():** o useState pode ser usado para armazenar o conteúdo de um elemento HTML em um estado do componente. O componente pode então renderizar o elemento HTML com o conteúdo do estado.
**useEffect():** o useEffect pode ser usado para obter o conteúdo de um elemento HTML assim que o componente é montado.

### 4.  Why it is not a good idea to touch the DOM directly in React ?

No React, é recomendado evitar tocar diretamente no DOM (Document Object Model) porque isso pode causar problemas de consistência de estado e rendimento. O React foi projetado para lidar com a manipulação do DOM de forma eficiente e transparente ao desenvolvedor, gerenciando a sincronização do estado do componente com a representação visual.

Ao tocar diretamente no DOM, você estaria contornando o gerenciamento de estado do React e causaria problemas de consistência de estado, o que pode resultar em erros e comportamentos inesperados. Além disso, as operações no DOM podem ser custosas em termos de performance, especialmente se você estiver lidando com muitos componentes e elementos.
  
### 5.  What is most frequently used in React ? Controlled or Uncontrolled input.

Em geral é recomendado o uso de entradas controladas, pois é mais fácil de garantir a integridade dos dados e fazer validação dos campos. Entradas não controladas podem ser úteis em algumas situações específicas, mas geralmente não são recomendadas.

### 6.  What do you need to write uncontrolled input?

Para escrever entradas não controladas em React, você precisará fazer o seguinte:

1.  Criar uma referência para o elemento de entrada usando o useRef() e armazenar essa referência em um estado do componente.
    
2.  Utilizar a referência para acessar o valor do elemento de entrada através do método current.value
   
3.  Adicionar o atributo defaultValue ou defaultChecked ao elemento de entrada para definir o valor inicial
    
4.  Adicionar um evento onChange para monitorar as alterações no valor do elemento de entrada
    
5.  Utilizar a referência para atualizar o valor do elemento de entrada quando o valor do estado muda
    
6.  Faça a validação e o gerenciamento de erros manualmente, pois o componente não tem acesso automático ao valor atualizado do elemento de entrada.

```js
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input
        type="text"
        defaultValue={''}
        ref={inputRef}
        onChange={() => {}}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}
```

### 7.  Does state require to write uncontrolled input?

Não é necessário usar estado para escrever uma entrada não controlada no React, mas é uma prática recomendada, pois isso ajuda a garantir a consistência de dados e facilita o gerenciamento de erros e validação.

Quando você usa uma entrada não controlada, o valor do elemento de entrada não está vinculado ao estado do componente, e você precisa acessar o valor diretamente através do DOM. Isso significa que você tem que gerenciar o valor e o estado de forma manual, o que pode ser mais complexo e propenso a erros.

Quando você usa estado para gerenciar o valor de uma entrada não controlada, você tem uma representação centralizada do valor do elemento de entrada, e pode usar essa representação para garantir a consistência de dados e validar a entrada. Além disso, você pode usar a referência para atualizar o valor do elemento de entrada quando o estado muda, garantindo que o valor do elemento de entrada sempre esteja sincronizado com o estado.

### 8.  When do you use uncontrolled input?

Entradas não controladas, por outro lado, são úteis em situações em que o valor do elemento de entrada é gerenciado fora do alcance do componente. Isso pode incluir casos em que o valor é gerenciado por uma biblioteca externa ou pelo próprio navegador. Entradas não controladas também podem ser úteis em casos em que o valor do elemento de entrada é armazenado em outro lugar (como em uma store global) e não precisa ser gerenciado pelo componente.

### 9.  When do you use controlled input?

Entradas controladas são geralmente a escolha recomendada quando se trata de inputs em React. Isso porque elas têm a vantagem de garantir a consistência de dados e facilitar a validação e o gerenciamento de erros. Com entradas controladas, o valor do elemento de entrada é gerenciado pelo estado do componente, permitindo que o componente tenha o controle completo sobre o valor e o comportamento do elemento de entrada.

### 10.  Do you use a controlled or uncontrolled input to validate form input fields?

Entradas controladas, pois são recomendadas para garantir a integridade dos dados e facilitar a validação e gerenciamento de erros,