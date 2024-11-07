import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import LogOut from './components/LogOut';
import Register from './components/Register';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";
import Register2 from './components/Register2';
import Login from './components/Login';
import Discover from './components/Discover';
import Profile from './components/Profile';

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
        <Route path="/register" element= { <Register /> } />
        <Route path="/register2" element= { <Register2 /> } />
        <Route path="/login" element= { <Login /> } />
        <Route path="/discover" element= { <Discover /> } />
        <Route path="/search" element= { <Search /> } />
        <Route path="/profile" element= { <Profile /> } />
      </Routes>
    </Router>
    </div>
  );

}

export default App;
 