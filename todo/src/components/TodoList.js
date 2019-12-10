import React from 'react'



const TodoList = (props) => {
// console.log(props.todo)
    return (
        
        <div onClick ={() => props.dispatch({type: "COMPLETED", payload: props.todo })} style ={{textDecoration: props.todo.completed ? 'line-through': null}} console>   
            <h2>{props.todo.item}</h2>
        </div>
    )

}

export default TodoList