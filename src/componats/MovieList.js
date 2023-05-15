import { useState } from "react";
import axios from 'axios';

import { useEffect } from "react";
import Movie from "./Movie";
function MovieList(props) {







  
        return (
            <>
                {props.data&&props.data.map((item) => {
                return (
                    <Movie data={item} key={item.id} /> 
                    )
                }
                )}
            </>
        )
    }
  


export default MovieList;