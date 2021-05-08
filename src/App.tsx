import React from 'react';
import { TodoItemFactory } from './factory';
import { TTodo } from './domain';
import { Header, TodoList } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <TodoList>
            {(todos: TTodo[]) => todos.map((todo: TTodo) => (<TodoItemFactory todo={todo}/>))}
        </TodoList>
    </div>
  );
}

export default App;
