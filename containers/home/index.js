import React from 'react'
import Movies from '../../mocks/movies.json'
import Genres from '../../mocks/genres.json'
import {Categories, FeaturedMovie,MoviesSection} from '../../components'
const HomeContainer = () => { 
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres}/>
      <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)}/>
      <MoviesSection title='Your Favorites' movies={Movies.results.slice(7,13)}/>
    </div>
  )
}

export  {HomeContainer}