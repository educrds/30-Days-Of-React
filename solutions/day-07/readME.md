# Day 07

### How do you write a pure JavaScript function

```jsx
let tax = 20;
function calculateGST( productPrice ) {
    return productPrice * (tax / 100) + productPrice;
}
```

### What is inheritance and how do you make a child from a parent class?

```jsx
class Component {
  constructor(props) {}
}

class Child extends Component {
  constructor(props) {
    super(props)
  }
}
```

### What is class based React component ?

É um filho de um componente React e tem um método de renderização embutido e pode ter um construtor.