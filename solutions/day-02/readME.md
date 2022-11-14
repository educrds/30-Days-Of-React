# Day 02

### **Exercises: What is React?**

### What is React?

É uma biblioteca para construir interfaces reutilizáveis de usuário.

### What is a library?

É uma coleção de códigos escritos por outra pessoa que nos permite usá-los para otimizar tempo e tarefas.

### What is a single page application?

Uma aplicação que tem apenas uma página HTML

### What is a component ?

Componentes são partes de um código que são pedaços reutilizáveis e independentes, podendo ser utilizados posteriormente em qualquer parte da pagina, quando necessário. 

### What is the latest version of React?

************Version 17.0.2************

### What is DOM?

significa **Document Object Manipulation** - serve para manipularmos objetos dentro de uma página HTML.

### What is React Virtual DOM?

É uma representação visual da UI e é mantida em memoria e sincronizado com o DOM real.

### What does a web application or a website(composed of) have?

### **Exercises: Why React?**

### Why did you chose to use react?

Por ser mais popular e ter uma documentação mais difundidada e conhecida.

### What measures do you use to know popularity ?

Através do GitHub e empresas que utilizam o mesmo.

### What is more popular, React or Vue ?

Levando em consideração a utilização: **React**

Levando em consideração estrelas no GitHub: **VueJs**

### **Exercises: JSX**

### What is an HTML element?

É o elemento raiz de uma página web, tudo dentro dele será renderizado pelo browser.

### How to write a self closing HTML element?

```jsx
<Input />
```

### What is an HTML attribute? Write some of them

- `href` → indica o caminho do link inserido na tag `a`.

```jsx
<a href="https://github.com/" target="_blank">GitHub</a>
```

### What is JSX?

Significa JavaScript XML(JSX), ele renderiza HTML juntamento com JavaScript em um único arquivo.

### What is babel?

É uma biblioteca que traduz JSX para JavaScript puro.

### What is a transpiler?

É um programa que traduz um código fonte de uma linguagem para outra.

### **Exercises: JSX Elements**

### What is a JSX element?

São elementos que unem a HTML e JavaScript.

### Write your name in a JSX element and store it in a name variable

```jsx
const eduardo = <h1>Eduardo</h1>
```

### Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

```jsx
const infos = (
<>
	<h1>Eduardo Cardoso</h1>
	<p>Brazil</p>
	<p>Male</p>
	<p>edu@gmail.com</p>
	<p>55 61 8909-7865</p>
</>
)
```

### Write a footer JSX element

```jsx
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)
```

### **Exercises: Inline Style**

### Create a style object for the main JSX

```jsx
const main = (
  <main 
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </main>
)
```

### Create a style object for the footer and app JSX

```jsx
const style = { border: '2px solid orange', color: 'black', fontSize: '18px' }

const footer = (
  <footer style={style}>
    <p>Copyright 2020</p>
  </footer>
)
```