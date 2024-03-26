import {createSlice , nanoid} from '@reduxjs/toolkit';


//nanoid unique id provide karta hai


const intialState = {
todos: [{id : 1 , text: "Hello World"}]
}





export const todoSlice = createSlice({
  name: 'todo',
  intialState,
  reducers: {
    addTodo : (state , action) => {
        const todo = {
            id: nanoid(),
            text:action.payload 
        }
        state.todos.push(todo)
    }, //hamesha do chize milegi ek state dusra action
    removeTodo: (state , action) => {
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    },


  }

})


export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer