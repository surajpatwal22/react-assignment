import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const { movie } = useGlobalContext();
  
  return (
      <section className='movie-page'>
        <div className=' container grid grid-4-col'>
        {movie.map((curMovie) => {
          return (
            <NavLink to={`movie/${curMovie.imdbID}`} key={curMovie.imdbID}>
              <div className='card'>
                <div className='card-info'>
                  <h2>{curMovie.Title}</h2>
                  <img src={curMovie.Poster} alt="#" />

                </div>

              </div>

            </NavLink>
          )
        })}
        </div>
      </section>

      
   
  )
}

export default Movie