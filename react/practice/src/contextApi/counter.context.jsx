import { createContext, useState } from "react";

export const counterContext = createContext()

export const CounterContextProvider = ({children})=>{

    const [counter , setCount] = useState(0)

    const countPlus = ()=>{
        setCount((pre)=>pre+1)
    }
    const countMinus = ()=>{
        setCount((pre)=>pre-1)
    }


    return (
        <counterContext.Provider value={{counter,countPlus,countMinus}}>
            {children}
        </counterContext.Provider>
    )

}