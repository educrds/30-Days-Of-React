# Day 05

### What is props in a React component ?

Sao propriedades que podem passar dados entre componentes React

### How do you access props in a React component ?

Utilizando a palavra chave props e o nome do props.

```jsx
// construindo o props

const Input = (props){
	return (
	<input placeholder={props.placeholder}><input/>
	)
}

// utilizando o props 

<Input placeholder="Email"/>
```

### What data types can we pass as props to components ?

- String
- Number
- Boolean
- Arrays
- Objects
- Funções

### What is a propTypes?

Pacote que nos ajuda atribuir tipos de dados das propriedades que passamos para um componente.

### What is a default propTypes?

Quando na ausência de valor, queremos utilizar algum valor padrão para o props.