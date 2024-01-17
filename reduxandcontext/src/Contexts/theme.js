import {createContext,useContext} from 'react'

export const themecontext= createContext({
    whattheme:"light",
    darkt:()=>{},
    lightt:()=>{}
})

export const Themeprovidercontext= themecontext.Provider

export default function usethemebytenzin(){
    return useContext(themecontext)
} 