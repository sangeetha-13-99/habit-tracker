import React from 'react'
import { Cards } from '../components/Cards'
import { useHabitContext } from '../store/habit-context'

export const ArchivePage = () => {
const {archive}=useHabitContext();
  return (
    <div>
       <Cards habits={archive}/>
    </div>
  )
}
