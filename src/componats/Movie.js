
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import ModelMovie from './ModelMovie.js';
import { useState } from 'react';
function Movie (props){
const[showFlag, setShowFlag]=useState(false)
const [clickedMovie, setClickedMovie] = useState({});
/*const addMovieHandler = (data) => {
  const serverUrl = 'http://localhost:3005/addMovie'
  axios.post(serverUrl, data.data)
    .then(respons => {

    }).catch((error) => {
      console.log(error)
    })
}*/
const handelShow =(item)=>{
    setShowFlag(true) ;
    setClickedMovie(item)
    console.log(clickedMovie)
}

const handleClose=()=>{
    setShowFlag(false) ;
}

    
const { id,title, release_date, poster_path, overview } = props.item
    return(
        <>
      
        <Row xs={1} md={2} className="g-4">
       {Array.from({ length: 1 }).map((_, idx) => (
         <Col key={id}>
           <Card bg='dark' text="muted"border="muted" >
             <Card.Img variant="top" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+poster_path}  />
             <Card.Body>
               <Card.Title><h1>{title}</h1></Card.Title>
               <Card.Text>
               <h3>{release_date}</h3>
           <p>{overview}</p>
               </Card.Text>
               <button onClick={handelShow()}>See more</button>
             </Card.Body>
           </Card>
         </Col>
      ))}
     </Row>
     <ModelMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}/>
            
        </>
    )}

export default Movie ;