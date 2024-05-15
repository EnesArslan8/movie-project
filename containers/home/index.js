import React from 'react'
import Movies from '../../mocks/movies.json'
import Genres from '../../mocks/genres.json'
import {Categories, FeaturedMovie} from '../../components'
const HomeContainer = () => { 
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres}/>
    </div>
  )
}

export  {HomeContainer}