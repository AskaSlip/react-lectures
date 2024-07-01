import React, {useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState<any[]>([])


const reducer = (
    state: number,
    action: {type: string, payload: number}
) => {
    switch (action.type){
        case 'prev':
            return state - action.payload;
        case 'next':
            return state + action.payload;
        case 'done':
            return 0;
    }
    return state;
}

    const [todoList, dispatch ] = useReducer(reducer, 0)

    useEffect(() => {
        fetch('https://dummyjson.com/todos?limit=5&skip=' + todoList)
            .then(value => value.json())
            .then(todosResponse => {
                setTodos(todosResponse.todos)
            })
    }, [todoList]);


  return (
      <div>

          <ul>
              {todos.map(value => <li key={value.id}>{value.todo}</li>)}
          </ul>


          <button onClick={() => {
              dispatch({type: 'prev', payload: 5})
          }}>
              prev
          </button>
          <button onClick={() => {
              dispatch({type: 'next', payload: 5})
          }}>
              next
          </button>
          <button onClick={() => {
              console.log('allDone');
              dispatch({type: 'done', payload: 0})
          }}>
              allDone
          </button>

      </div>
  );
}

export default App;

