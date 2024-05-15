import './featuredMovie.css'
import React from 'react'
import {LoadingSpinner} from '@/components'

const FeaturedMovieLoading = () => {
  return (
    <div style={{height:278}} className='movieWrapper'>
        <LoadingSpinner/>
    </div>
  )
}

export  {FeaturedMovieLoading}