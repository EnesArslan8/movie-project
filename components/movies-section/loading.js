import { Skeleton } from '../skeleton';
import './moviesSection.css'
import React from 'react'

const MoviesSectionLoading = () => {
    return (
        <div className='moviesSection'>
          <Skeleton width={128} height={36} />
          <div className='movies'>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} />
              ))}
          </div>
        </div>
      );
}

export  {MoviesSectionLoading}