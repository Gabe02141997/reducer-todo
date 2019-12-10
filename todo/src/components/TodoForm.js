import React, { useState, useReducer } from 'react'
import { todoReducer, initialState } from '../reducers/reducer'
import TodoList from './TodoList'
import styled from 'styled-components'

// const ButtonContainer = styled.div`
// display flex;
// flex-direction: column;
// justify-content: center;
// align-content: center;
// align-items: center; 



// `

const Input = styled.input`
padding: 0.5rem 1.2rem;
margin-bottom: 1rem;
border: 1px solid black;
border-radius: 5px;

`




const FormContainer = styled.form`

display: flex;
flex-direction: column;
justify-content: center
align-content: center; `


const ButtonStyle = styled.button`

border: none;
border-radius: 5px;
color: #fff;
background: #42f578
padding: 1rem 2rem; 
 margin-bottom: 1rem;


`

const ItemContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center; 
max-width: 100%;
margin: 0 auto;


`
// #42f578


const Todoform = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialState)
    const [ todo, setTodo ] = useState({
        item: '',
        id: Date.now(),
        completed: false
    })


    const changeHandler = e => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todo})
    }

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({type: "CLEAR", payload: todo })
    }

    return (
        <FormContainer>
            <ItemContainer>
            {todoState.todos.map(todo => (
                <TodoList todo ={todo} dispatch={dispatch} todoState={todo}/> 
            ))}

            <Input type ='text' name ='item' value={todo.item} onChange={changeHandler}/>
           
            <ButtonStyle type ='submit' onClick={handleSubmit}>Add Todo</ButtonStyle>
            <ButtonStyle type ='submit' onClick={clearCompleted}>Clear Completed</ButtonStyle>
            </ItemContainer>
        </FormContainer>
    )
}


export default Todoform