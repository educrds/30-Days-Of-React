# Day 04

### What is the difference between a regular function and an arrow function?

Na função regular, argumentos darão uma lista de parâmetros passados para a função, nas funções arrows, argumentos não são definidos, na função regular, temos sempre um retorno como valor, mas na arrow function não necessitamos da palavra-chave `return`  

### What is a React Component?

São pedaços de códigos que são únicos e independentes porém são reutilizáveis.

### How do you make a React functional component?

Transformados atribuídos estáticos em funções que podem ser passadas dinamicamente.

### What is the difference between a pure JavaScript function and a functional component?

o puro não volta a renderizar por causa dos props e o estado nele (na verdade não temos nenhum) não muda, mas o Componente Funcional voltam a renderizar-se sempre que o componente pai renderiza.

### How small is a React component?

Cada componente é geralmente compacto **(100-200 linhas)**

### Can we make a button or input field component?

```jsx
const name = "Subscribe";

const Button = () => {
	return <button>{name}<button/>
}
```

### Make a reusable Button component.

```jsx
const name = "Sign In";

const Button = () => {
	return <button>{name}<button/>
}
```

### Make a reusable InputField component.

```jsx
//input.jsx

const Input = ({ placeholder }) => {
  return <input placeholder={placeholder}></input>;
};
```

```jsx
// index.js

<Input placeholder="First name"></Input>
<Input placeholder="Last name"></Input>
```

### Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

```jsx
//alert.jsx

const Alert= ({ alert }) => {
  return 
		<div>
			<p>{alert}</p>
		</div>;
};
```

```jsx
// index.js

<Alert alert="Warning"></Alert>
<Alert alert="Sucess"></Alert>
```