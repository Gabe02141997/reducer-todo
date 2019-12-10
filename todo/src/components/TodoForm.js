import React, { useState, useReducer } from 'react'
import { todoReducer, initialState } from '../reducers/reducer'
import TodoList from './TodoList'


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
        <div>
            {todoState.todos.map(todo => (
                <TodoList todo ={todo} dispatch={dispatch} todoState={todo}/> 
            ))}

            <input type ='text' name ='item' value={todo.item} onChange={changeHandler}/>
            <button type ='submit' onClick={handleSubmit}>Add Todo</button>
            <button type ='submit' onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}


export default Todoform