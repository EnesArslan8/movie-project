import React from 'react'
import {FeaturedMovie} from '../../components'
const MovieContainer = ({movie}) => { 
  return (
    <div>
        <FeaturedMovie movie={movie} isCompact={false}/>
      </div>
  )
}

export  {MovieContainer}