import React from 'react'

import {DeleteIcon,EditIcon } from '@chakra-ui/icons'
import { useHabitContext } from '../store/habit-context'
import { useModalContext } from '../store/modal-context';

export const Card = ({habit}) => {
    console.log(habit,"habit in ard")
    const {dispatchHabit}=useHabitContext();
    const {dispatchModal} = useModalContext();

    const deleteHandler=(e)=>{
        e.preventDefault();
        dispatchHabit({type:'DELETEHABIT',payload:habit._id});
    }
    const EditHandler=(e)=>{
        e.preventDefault();
        dispatchModal({type:'OPENMODAL',payload:habit});
    }
    const ArchiveHandler=(e)=>{
        e.preventDefault();
        dispatchHabit({type:'ARCHIVEHABIT',payload:habit});
    }
  return (
    <div className='habit-card' onClick={(e)=>EditHandler(e)}>
        <img src={habit.image} alt={habit.title}/>
        <div className='habit-details'>
            <p className='habit-title'>{habit.title}</p>
            <button onClick={(e)=>{deleteHandler(e)}}><DeleteIcon boxSize={6} /></button>
            <button onClick={(e)=>EditHandler(e)}><EditIcon boxSize={6} /></button>
            <button onClick={(e)=>ArchiveHandler(e)} >archive</button>
        </div>
    </div>
  )
}
