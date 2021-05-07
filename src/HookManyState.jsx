import React, { useState, useReducer } from 'react'

function Hookmanystate() {
     // Déclarer plusieurs variables d'état !
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banane');
    const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);
    // Stocker un objet dans le state via hook
    const [inputValues, setInputValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {username: '', password: ''}
      );
      

  function handleOrangeClick() {
    // Similaire à this.setState({ fruit: 'orange' })
    setFruit('orange');
    console.log(fruit);
  }

  function handleAgeClick() {
    // Similaire à this.setState({ age: '40' })
    setAge(40);
    console.log(age);
    console.log(todos);
  }

 
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };;

    return (
     
        <>
        <h1>Hook many states</h1>
            <button onClick={handleOrangeClick}>useState : setFruits</button>
            <button onClick={handleAgeClick}>useState : setAge</button>
            <input type="text" placeholder="notter ce que vous voulez" onChange={e => setTodos(e.target.value)} />
            <h1>useState : objet javascript</h1>
            <input name="username" type="text" placeholder="Name" onChange={handleOnChange} />
            <input name="password" type="text" placeholder="psw" onChange={handleOnChange} />
            <button onClick={console.log(inputValues)}>Button log(InputValuesset)</button>

        </>
    )
}


export default Hookmanystate
