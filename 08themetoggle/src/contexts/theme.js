import { useContext,createContext } from "react";

export const Themecontext= createContext(
    {
        thememode:"light",
        darktheme:()=>{},
        lighttheme:()=>{}
    }
)
//in create context we can pass default value

export const Themeprovider =Themecontext.Provider

export default function usetheme()
{
    return useContext(Themecontext)
}