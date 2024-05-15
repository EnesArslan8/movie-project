import React from 'react'
import { HomeContainer } from '../../containers'
import Movies from '@/mocks/movies.json'

const Home = ({params}) => {
    let selectedCategory;
    let filteredMovie;
    if(params.category){
        selectedCategory=true;
        filteredMovie = Movies.results.filter(movie =>
            movie.genre_ids.includes(Number(params.category))
        );
    }

  return (
    <HomeContainer selectedCategory={{
        id:params.category?.[0] ?? '',
        movies:selectedCategory ? filteredMovie : []
    }}/>
  )
}

export default Home

