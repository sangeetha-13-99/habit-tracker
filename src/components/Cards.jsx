import React from 'react'
import { Card } from './Card'

export const Cards = ({habits}) => {
   console.log(habits)
    const renderHabits=habits?.map(habit=>{
      return (
        <Card key={habit._id} habit={habit}/>
      )
    })

  return (
    <div className='cards'>
        {renderHabits}
    </div>
  )
}
