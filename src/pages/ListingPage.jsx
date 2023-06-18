import React from 'react'
import { Link } from 'react-router-dom'
import { useHabitContext } from '../store/habit-context';
import { Cards } from '../components/Cards';
import { useModalContext } from '../store/modal-context';
import { Form } from '../components/Form';

export const ListingPage = () => {
    const {habitData:{habits}} = useHabitContext(); 
    const {dispatchModal,ModalData} =useModalContext();
    const createHabitHandler=(e)=>{
        console.log("openmodal");
        dispatchModal({type:'OPENMODAL',payload:{}});
    }

  return (
    <div>
        {ModalData.isOpen && <Form/>}
       <Link to="/archive">
            <button className='archive-button' > Go to Archive </button>
       </Link>
       <div className='habit-container'>
            <button onClick={(e)=>{createHabitHandler(e)}} className='habit-create-btn'>Add new Habit</button>
            <Cards habits={habits}/>
       </div>
    </div>
  )
}
