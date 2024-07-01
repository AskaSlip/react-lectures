import React, {useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [skipValue, setSkipValue] = useState<number>(0)
  const [todos, setTodos] = useState<any[]>([])
  
  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=5&skip=' + skipValue)
        .then(value => value.json())
        .then(todosResponse => {
          setTodos(todosResponse.todos)
        })
  }, [skipValue]);


  return (
      <div>

        <ul>
          {todos.map(value => <li key={value.id}>{value.todo}</li>)}
        </ul>

        <hr/>

        <button onClick={() => {
          console.log('prev');
          setSkipValue(skipValue -10);
        }}>
          prev
        </button>

        <button onClick={() => {
        console.log('next');
        setSkipValue(skipValue +10)
        }}>
          next
        </button>


      </div>
  );
}

export default App;

