import { createContext, useContext, useReducer } from "react";
import { habitReducer, intialHabitData } from "./habit-reducer";

const HabitContext=createContext({
    habitData:{},
    dispatchHabit:()=>{}
});

export const HabitContextProvider=({children})=>{

    const [habitData,dispatchHabit]=useReducer(habitReducer,intialHabitData)
    return (
        <HabitContext.Provider value={{habitData,dispatchHabit}}>
            {children}
        </HabitContext.Provider>
    )
}

export const useHabitContext=()=>{
    return useContext(HabitContext);
}