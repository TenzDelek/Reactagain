import {createContext, useContext} from 'react'

export const TodolistContext= createContext({});

export const useTodo= ()=>{
    return useContext(TodolistContext)
}

export const Todoprovider=TodolistContext.Provider;
//to not to use .provider often we directly declare it in a const