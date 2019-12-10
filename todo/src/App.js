import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todoform from './components/TodoForm';
import styled from 'styled-components'

const HeaderStyle = styled.h1`
color: #42f578

`

function App() {
  return (
    <div className="App">
    <HeaderStyle>Reducer Todo</HeaderStyle>
     <Todoform/> 
    </div>
  );
}

export default App;
