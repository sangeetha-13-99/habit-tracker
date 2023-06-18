import React from 'react'
import { Link } from 'react-router-dom'
import { useHabitContext } from '../store/habit-context';
import { Cards } from '../components/Cards';
import { useModalContext } from '../store/modal-context';
import { Form } from '../components/Form';

export const ListingPage = () => {
    const {habitData:{habits}} = useHabitContext(); 
    const {dispatchModal,ModalData} =useModalContext();
    console.log(ModalData.isOpen,"modla opne")
    const createHabitHandler=()=>{
        console.log("openmodal");
        dispatchModal({type:'OPENMODAL',payload:{}});
    }

  return (
    <div>
        {ModalData.isOpen && <Form/>}
       <Link to="/archive">
            <button className='navigate-button' > Go to Archive </button>
       </Link>
       <div className='habit-container'>
            <button onClick={createHabitHandler} className='habit-create-btn'>Add new Habit</button>
            <Cards habits={habits} isArchived={false}/>
       </div>
    </div>
  )
}
