import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'swiper/css';
import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';
function App() {
  return (
    <div className="App">
      <h1>TO DO App</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
