
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./MovieList";



function Home (){






  var[movieData, setMovieData] = useState([]);

    const getAllMovie = () => {

        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        axios.get(serverURL).then(data => {
            console.log(data)
            setFavArray(data.data)
      favArray=data.data
            console.log(favArray)
          }).catch((error) => {
            console.log(error)
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











