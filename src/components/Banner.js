import React from 'react'
import axios from '../axios';
import requests from '../request';
import "./banner.css"
const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie, setMovie] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }
        fetchData()
    }, []);
    console.log(movie)

    function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1) + "...":str;
    }

    return (
        <header className='banner text-white object-contain'
            style={
                {
                    backgroundSize: "cover",
                    backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }
            }
        >
            {/* background img */}

            <div className='banner-contents ml-8 pt-36 h-48 '>
                <h1 className='text-5xl font-extrabold pb-1 '>{movie?.name || movie?.title || movie?.original_name}</h1>
               
                <div className='banner-buttons'>
                    <button className='banner-button cursor-pointer border-none outline-none'>Play</button>
                    <button className='banner-button cursor-pointer border-none outline-none'>My List</button>
                </div>

                <div className='banner-description'>
                    {truncate(movie?.overview,150)}
                </div>
            </div>
 
            <div className='fade-bottom'></div>
        </header>
        
    )
}

export default Banner