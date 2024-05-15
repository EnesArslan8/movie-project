import './categories.css'
import React from 'react'
import { Skeleton } from '../skeleton'

const CategoriesLoading = () => {
  return (
    <div className='categories'>
        {Array(5)
        .fill(null)
        .map((_,index)=>(
            <Skeleton key={index} height={72}/>
        ))}
    </div>
  )
}

export  {CategoriesLoading}