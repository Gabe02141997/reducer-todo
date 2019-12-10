export const initialState = {
  todos: [
      {
          item: 'Learn about Reducers',
          completed: false,
          id: 1
      }
  ]
}


export const todoReducer = (state = [], action) => {
      switch(action.type){
          case "ADD_TODO" :
              return {
                  ...state,
                  todos: [...state.todos, action.payload]
              }

           case "COMPLETED" :
               return {
                   ...state,
                   todos: state.todos.map(todo => {
                       if(todo.id === action.payload.id){
                           return {...todo, completed: !todo.completed}
                       } else {
                           return todo
                       }
                   })
               }  

             case "CLEAR" : 
             return {
                 ...state,
                 todos: state.todos.filter( todo => !todo.completed)
             }  
          default:
              return state
      }
      
}