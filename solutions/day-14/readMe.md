## Solution (Day 14 - Level 01)

### 1.  What is component life cycles?

São fases que um componente pode passar ao decorrer do tempo de sua "vida".

### 2.  What is the purpose of life cycles

Monitorar e manipular cada componente durantes as fases do ciclo de vida.

### 3.  What are the three stages of a component life cycle

 1. Mounting
 2. Updating
 3. Unmounting
 4. 
### 4.  What does mounting means?

Mounting → quando é renderizado pela primeira vez, quando a vida do componente começa.

### 5.  What does updating means?

Updating → um componente atualiza cada vez que é renderizado. Ocorre quando props são atualizados ou quando o estado é atualizado, pode ocorrer múltiplas vezes.

### 6.  What does unmounting means?

Unmounting → ocorrer quando o componente é removido do DOM.

### 7.  What is the most common built-in mounting life cycle method?

    `Render`

### 8.  What are the mounting life cycle methods?

 1. `constructor`
 2. `static getDerivedStateFromProps`
 3. `render`
 4. `componentDidMount`

### 9.  What are the updating life cycle methods?

 1. `static getDerivedFromProps`
 2. `shouldComponentUpdate`
 3.  `render`
 4.  `getSnapshotBeforeUpdate`
 5.  `componentDidUpdate`

### 10.  What is the unmounting life cycle method?

 1. `componentWillUnmount`
