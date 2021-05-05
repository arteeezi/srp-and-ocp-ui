import React from 'react';
import { TTodo } from './domain';
import { Header, TodoList } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <TodoList>
            {(todos: TTodo[]) => todos.map((todo: TTodo) => (<div>{todo.text}</div>))}
        </TodoList>
    </div>
  );
}

export default App;
