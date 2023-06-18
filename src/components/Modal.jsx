import React, { Fragment } from 'react'
import {createPortal} from "react-dom"
import { useModalContext } from '../store/modal-context'
import {CloseIcon } from '@chakra-ui/icons'


const BackDropModal=({onClick})=>{
    
    return (
        <div className='backdrop-modal' onClick={onClick}>
        </div>
    )
}

const ModalContent=({children,onClick})=>{
    return (
        <div className='modal'>
            <button className='button-close' onClick={onClick}><CloseIcon w="4" h="4" color="white"/></button>
            {children}
        </div>
    )
}

export const Modal = ({children}) => {
    const {dispatchModal}=useModalContext();
    return (
        <Fragment>
            { createPortal(<BackDropModal onClick={()=>{
                dispatchModal({type:"CLOSEMODAL"})
                }}/>,document.getElementById("modaloverlay"))}

            { createPortal(<ModalContent onClick={()=>{
                dispatchModal({type:"CLOSEMODAL"});
                }}>{children}</ModalContent>,document.getElementById("modaloverlay"))}
        </Fragment>
    )
}
