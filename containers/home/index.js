import React from 'react'
import Movies from '../../mocks/movies.json'
import Genres from '../../mocks/genres.json'
import {Categories, FeaturedMovie,MoviesSection} from '../../components'
const HomeContainer = ({selectedCategory}) => { 
  
  let title ;
  if(selectedCategory){
    title=Genres.genres.find((genre)=>genre.id === Number(selectedCategory.id))
  }
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres}/>
      {selectedCategory &&  (
        <MoviesSection title={title?.name} movies={selectedCategory?.movies}/>
      )} 
      <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)}/>
      <MoviesSection title='Your Favorites' movies={Movies.results.slice(7,13)}/>
    </div>
  )
}

export  {HomeContainer}