
import Movie from "./Movie";
function MovieList(props) {







  
        return (
            <>
                {props.movieData&&props.movieData.map((item) => {
                return (
                    <Movie data={item} key={item.id} /> 
                    )
                }
                )}
            </>
        )
    }
  

export default MovieList;