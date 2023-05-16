
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./MovieList";



function Home (){






  var[movieData, setMovieData] = useState([]);

    const getAllMovie = () => {

        const serverURL = 'http://localhost:3005/trending';

        fetch(serverURL)
            .then(response => {
                response.json()
                .then(data => {
                    setMovieData(data) 
                    movieData=data
                    console.log(movieData)
                })
            })
    } ;
    useEffect(() => {
        getAllMovie() ;
       
    }, [])
    return (<>
      
        <MovieList  movieData={movieData}/>
    </>)
}
export default Home











