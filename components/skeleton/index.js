import './skeleton.css'
import React from 'react'

const Skeleton = ({width,height}) => {
  return (
    <div className='skeleton' style={{width,height}}></div>
  )
}

export  {Skeleton}