import { createContext, useContext } from "react";

export const TodolistContext = createContext({
  todos: [
    {
      id: 1,
      todo: "message",
      completed: false,
    },
  ],
  addtodo: (todo)=>{},
  updatetodo:(id,todo)=>{},
  deletetodo:(id)=>{},
  toglecomplete: (id)=>{}
});

export const useTodo = () => {
  return useContext(TodolistContext);
};

export const Todoprovider = TodolistContext.Provider;
//to not to use .provider often we directly declare it in a const
