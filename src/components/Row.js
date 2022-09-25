import React, { useState, useEffect } from 'react'
import axios from '../axios';
import "./row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ Title, fetchUrl, IsLargeRow }) {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

    // a snippet of code which runs based on  a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            // console.log(request)
        }

        fetchData();
    }, [fetchUrl])   //whenver including a outside variable in use efffect,, always include it in the deendency array coz it is an dependency which changes  

    console.log(movies)

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
           autoplay:1,
        },
        }

    const handleClick =(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");

        }else{
            movieTrailer(movie?.name || "")
            .then(url=>{
              const urlParams = new URLSearchParams (new URL(url).search);
             setTrailerUrl(urlParams.get("v")) ;
            })
            .catch((error)=>console.log(error))
        }
    };

    return (
        <div className='row ml-5'>
            <h2 className='7xl font-bold'>{Title}</h2>
            <div className='row-posters flex overflow-y-hidden	overflow-x-scroll p-5'>
                {/* {row__poster} */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`row-poster object-contain w-full ${IsLargeRow && "row-poster-large"}`}
                        src={`${base_url}${IsLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    ></img>
                ))}
            </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row