import React from 'react'

import {DeleteIcon,EditIcon } from '@chakra-ui/icons'
import { useHabitContext } from '../store/habit-context'
import { useModalContext } from '../store/modal-context';

export const Card = ({habit,isArchived}) => {
    console.log(habit,"habit in ard")
    const {dispatchHabit}=useHabitContext();
    const {dispatchModal} = useModalContext();

    const deleteHandler=(e)=>{
        e.stopPropagation();
        console.log(habit,"delete habit")
        dispatchHabit({type:'DELETEHABIT',payload:{id:habit._id}});
    }
    const EditHandler=(e)=>{
        

        dispatchModal({type:'OPENMODAL',payload:habit});
    }
    const ArchiveHandler=(e)=>{
        e.stopPropagation();
        dispatchHabit({type:'ARCHIVEHABIT',payload:{habit}});
    }
    const unArchiveHandler=(e)=>{
        e.stopPropagation();
        dispatchHabit({type:'UNARCHIVEHABIT',payload:{habit}});
    }
  return (
    <div className='habit-card' onClick={(e)=>EditHandler(e)}>
        <img src={habit.image} alt={habit.title}/>
        <div className='habit-details'>
            <p className='habit-title'>{habit.title}</p>
            <div className='habit-buttons'>
                <button onClick={(e)=>{deleteHandler(e)}}><DeleteIcon boxSize={6} /></button>
                <button onClick={(e)=>EditHandler(e)}><EditIcon boxSize={6} /></button>
               {!isArchived? <button onClick={(e)=>ArchiveHandler(e)} >archive</button>:<button onClick={(e)=>unArchiveHandler(e)} >un archive</button>}
            </div>
        </div>
    </div>
  )
}
