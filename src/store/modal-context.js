import { createContext, useContext, useReducer } from "react";
import { modalReducer, intialModalData } from "./modal-reducer";

const ModalContext=createContext({
    ModalData:{},
    dispatchModal:()=>{}
});

export const ModalContextProvider=({children})=>{

    const [ModalData,dispatchModal]=useReducer(modalReducer,intialModalData)
    return (
        <ModalContext.Provider value={{ModalData,dispatchModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext=()=>{
    return useContext(ModalContext);
}