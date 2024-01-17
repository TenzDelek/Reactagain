import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello"}]
}

export const Todoslice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})
//in state we get the current state
//action is the data passes

export const{addTodo,removeTodo}=Todoslice.actions
export default Todoslice.reducer