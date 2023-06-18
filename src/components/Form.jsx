import React, { useEffect, useState } from 'react'
import { useHabitContext } from '../store/habit-context';
import image1 from "../images/meditate.jpg"
import image2 from "../images/reading.jpg"
import {v4 as uuid} from "uuid"
import { Modal } from './Modal';
import { useModalContext } from '../store/modal-context';


export const Form = () => {
    const {habitData,dispatchHabit}=useHabitContext();
    const {ModalData,dispatchModal}=useModalContext();
    const [formData,setFormData]=useState({
        title:'',
        category:'',
        goal:'',
        repeat:'',
        timeOfDay:'Any Time',
        startDate:'Today'
    });

    useEffect(()=>{
        setFormData(ModalData.modalData);
    },[ModalData.modalData]);

    const titleChangeHandler=(e)=>{
        setFormData(prev=>({...prev,title:e.target.value}));
    }
    const categoryChangeHandler=(e)=>{
        setFormData(prev=>({...prev,category:e.target.value}));
    }
    const repeatChangeHandler=(e)=>{
        setFormData(prev=>({...prev,repeat:e.target.value}));
    }
    const goalChangeHandler=(e)=>{
        setFormData(prev=>({...prev,goal:e.target.value}));
    }
    const timeChangeHandler=(e)=>{
        setFormData(prev=>({...prev,timeOfDay:e.target.value}));
    }
    const startChangeHandler=(e)=>{
        setFormData(prev=>({...prev,startDate:e.target.value}));
    }
    const saveDataHandler=(e)=>{
        if(ModalData.modalData._id){
            const image=formData.category==="meditation"?image1:image2;
            dispatchHabit({type:"EDITHABIT",payload:{habit:{...formData,_id:ModalData.modalData._id,image:image}}});
        }
        else{
            const id=uuid();
            const image=formData.category==="meditation"?image1:image2;
            console.log('aving new',{...formData,_id:id,image:image})
            dispatchHabit({type:"ADDHABIT",payload:{habit:{...formData,_id:id,image:image}}});
        }
        dispatchModal({type:'CLOSEMODAL'});
    }

  return (
    <Modal>
        <form className='form-outer-div'>
            <div className='form-field-full'>
                <label htmlFor='title'>Habit Name</label>
                <input id="title" type="text" onChange={(e)=>{titleChangeHandler(e)}} value={formData.title}/>
            </div>
            <div  className='form-field-full'>
                <label>Category</label>
                <select onChange={(e)=>{categoryChangeHandler(e)}} value={formData.category}>
                    <option value="meditation">MEDITATION</option>
                    <option value="reading">READING</option>
                </select>
            </div>
            <div className='form-div'>
                <div  className='form-field-half'>
                    <label>Repeat</label>
                    <select onChange={(e)=>repeatChangeHandler(e)}  value={formData.repeat}>
                        <option value="daily">DAILY</option>
                        <option value="weekly">WEEKLY</option>
                        <option value="monthly">MONTHLY</option>
                    </select>
                </div>
                <div  className='form-field-half'>
                    <label>Goal</label>
                    <select onChange={(e)=>{goalChangeHandler(e)}}  value={formData.category}>
                        <option value="once">ONCE ADAY</option>
                        <option value="twice">TWICE A DAY</option>
                        <option value="thrice">THRICE A ADY</option>
                    </select>
                </div>
                <div  className='form-field-half'>
                    <label>Time Of The Day</label>
                    <select onChange={(e)=>{timeChangeHandler(e)}}  value={formData.timeOfDay}>
                        <option value="anyTime">ANYTIME</option>
                        <option value="morning">MORNING</option>
                        <option value="afternoon">AFTERNOON</option>
                        <option value="evening">EVENing</option>
                    </select>
                </div>
                <div  className='form-field-half'>
                    <label>Start Date</label>
                    <select onChange={(e)=>{startChangeHandler(e)}}  value={formData.startDate}>
                        <option value="today">TODAY</option>
                        <option value="tomorrow">TOMORROW</option>
                        <option value="other">OTHER</option>
                    </select>
                </div>
            </div>
            <button onClick={saveDataHandler}>SAVE</button>
        </form>
    </Modal>
  )
}
