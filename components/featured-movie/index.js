import Link from 'next/link';
import './FeaturedMovie.css'
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';

const FeaturedMovie = ({movie={},isCompact=true}) => {
    const { poster_path, title, overview } = movie;

    return (
      <div className="movieWrapper">
        <h1 className="movieTitle">{title}</h1>
        <p
          className={`overview ${
            isCompact ? "shortOverview" : ""
          }`}
        >
          {overview}
        </p>
        <div className="actionButtons">
          <Link className="playButton" href={`/movie/${movie.id}`}>
            Play
          </Link>
          <button className="addButton">
            <FaPlus />
          </button>
        </div>
        <div className="moviePoster">
          <div className="moviePosterOverlay"></div>
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            fill
          />
        </div>
      </div>
    );
}

export  {FeaturedMovie}