import React from 'react'
import { Cards } from '../components/Cards'
import { useHabitContext } from '../store/habit-context'
import { Link } from 'react-router-dom';
import { useModalContext } from '../store/modal-context';
import { Form } from '../components/Form';

export const ArchivePage = () => {
    const {ModalData} =useModalContext();
const {habitData:{archive}}=useHabitContext();
  return (
    <div>
        {ModalData.isOpen && <Form/>}
        <Link to="/listing">
            <button className='navigate-button' > Go to Listing </button>
       </Link>
       <Cards habits={archive} isArchived={true}/>
    </div>
  )
}
