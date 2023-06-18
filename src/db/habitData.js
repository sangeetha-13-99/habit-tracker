import {v4 as uuidv4 } from 'uuid'
import image1 from "../images/meditate.jpg"
import image2 from "../images/reading.jpg"

export const habitArray=[
    {
      '_id':uuidv4(),
      'title':'Meditate',
      'category':'meditate',
      'image':image1,
      'goal':'once',
      'repeat':'daily',
      'timeOfDay':'Any Time',
      'startDate':'Today'
    },
    {
        '_id':uuidv4(),
        'title':' read a book',
        'category':'reading',
        'image':image2,
        'goal':'once',
        'repeat':'daily',
        'timeOfDay':'morning',
        'startDate':'tomorrow'
    },
]