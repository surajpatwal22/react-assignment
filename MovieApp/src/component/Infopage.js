import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Api_Url } from "./context";
import { NavLink } from "react-router-dom";

const Infopage = () => {
  const { id } = useParams();
  const [isloading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState("");


  const getmovies = async (url) => {
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);


      }
    } catch (error) {
      console.log(error);

    }


  }


  useEffect(() => {
    var timee = setTimeout(() => {
      getmovies(`${Api_Url}&i=${id}`)
    }, 1000);
    return () => clearTimeout(timee);

  }, [id]);

  

  return (
    <>
      <section className='movie-section'>
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" srcset="" />
          </figure>

          <div className='card-content'>
            <p className='title'>{movie.Title}</p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn" > Go Back</NavLink>


          </div>
        </div>

      </section>
    </>
  )
}

export default Infopage