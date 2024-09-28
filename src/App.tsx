import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import LogOut from './components/LogOut';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";

const App: React.FC  = () => {
//   const [todo, setTodo] = useState<string>('');
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (todo) {

//       setTodos([...todos, {id: Date.now(), todo, isDone: false}])
//       setTodo('');
//     }
// };

//   console.log(todos);

  return ( 
    <div className="App">
      {/* <span className='heading'>Taskify</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList todos={todos} setTodos={setTodos} /> 
    {todos.map((t) => (
      <li> {t.todo} </li>
    ))} */}
    <Router>
      <Routes>
        <Route path="/" element= { <LogOut /> } />
      </Routes>
    </Router>
    </div>
  );

}

export default App;
 