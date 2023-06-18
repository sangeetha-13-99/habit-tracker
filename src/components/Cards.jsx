import React from 'react'
import { Card } from './Card'

export const Cards = ({habits,isArchived}) => {
    const renderHabits=habits?.map(habit=>{
      return (
        <Card key={habit._id} habit={habit} isArchived={isArchived}/>
      )
    })

  return (
    <div className='cards'>
        {renderHabits}
    </div>
  )
}
