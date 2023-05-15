import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./MovieList";
function Home (){


   
        const [movieData, setMovieData] = useState([])
        const getTrending = () => {
            const serverURL = "http://localhost:3005/trending";
            
            axios.get(serverURL)
             .then(response=>{
                
                 setMovieData(response.data)
                 console.log(movieData)
             })
             .catch((error)=>{
            
                 console.log(error)
         })
                  
                .catch((error) => console.log(error))
    
        }
        useEffect(() => {
            getTrending()
           
            
        }, [])
        return (
            <>
                <MovieList data={movieData} />
            </>
        )
    }
    export default Home;




    /*
    const [movieData, setMovieData] = useState([])
   
   const getTrending =(data)=>{
        const serverUrl='http://localhost:3005/trending'
        fetch(serverUrl)
        .then(result=>{
            console.log(result);
        result.json()
        .then(data=>{
            console.log(data);
            setMovieData(data);
console.log(movieData)

        })
    })
    .catch(error=>{
        console.log(error);
    })

}

       
       
         useEffect(()=>{
            getTrending()
        },[])
    


/////////
       /* const addMovieHandler=(item)=>{
            const serverUrl='http://localhost:3005/addMovie'
            axios.post(serverUrl, item)
            .then(respons =>{

            }).catch((error)=>{
                console.log(error)
            })
        }*/
/////////



       
 /*   
    return(
        <>
        <MovieList movieData={movieData}/>
        
       
         
        </>
    )
}
export default Home ;*/