import React from 'react';
import { MovieContainer } from '../../../containers'
import Movies from '../../../mocks/movies.json'
import { notFound } from 'next/navigation';

const MoviePage = ({params,searchParams}) => {
    const movieDetail=Movies.results.find((movie)=>movie.id===Number(params.id))

    if(!movieDetail){
        notFound()
    }
    if(!searchParams.error==='true'){
        throw new Error("Error happened")
    }

  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage