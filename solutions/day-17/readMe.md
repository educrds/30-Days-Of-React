
## Solution (Day 17 - Level 01)

  

### What package do you use to implement routing in react?

  

O pacote comumente utilizado para implementar rotas no React é o react-router-dom. Ele fornece uma série de componentes e hooks para gerenciar rotas e navegação na sua aplicação React.

  

### What is the default export in react-router-dom?

  

O export padrão do react-router-dom é o componente BrowserRouter. Ele é usado para criar um contexto de navegação para a sua aplicação. Ele deve ser usado em volta de todos os componentes que precisam acessar a informação de rota.

  

### What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)

  

Os seguintes componentes são comuns em aplicações React que usam o react-router-dom:

  

- Route: O componente Route é usado para definir as rotas da sua aplicação. Ele recebe um caminho e um componente e renderiza esse componente quando a URL corresponde ao caminho especificado.

  

- NavLink: O componente NavLink é usado para criar links de navegação. Ele é semelhante ao componente Link, mas possui estilos adicionais que podem ser aplicados automaticamente quando a rota correspondente é ativa.

  

- Switch: O componente Switch é usado para garantir que apenas uma das rotas filhas seja renderizada. Ele pode ser útil para evitar problemas com rotas sobrepostas.

  

- Redirect: O componente Redirect é usado para redirecionar o usuário para outra rota. Ele é útil para lidar com rotas não encontradas ou para implementar autenticação.

- Prompt: O componente Prompt é usado para mostrar uma caixa de diálogo de confirmação antes de permitir que o usuário saia da rota atual. Ele é útil para evitar que o usuário perca dados não salvos.