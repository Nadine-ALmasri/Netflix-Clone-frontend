import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import ModelMovie from './ModelMovie.js';
import { useState } from 'react';
import FavList from './FavList.js';





function Movie (props){

  const[comment, setComment]=useState("")
const[showFlag, setShowFlag]=useState(false)
var [clickedMovie, setClickedMovie] = useState({});
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
    clickedMovie=item
    console.log(clickedMovie)
}

const handleClose=()=>{
    setShowFlag(false) ;
}

    
//const { title, release_date, poster_path, overview } = props.item
    return(
        <>
 <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (
        <Col key={props.data.id}>
          <Card width="100"bg='dark' text="muted" border="muted" >
            <Card.Img border="danger"variant="top" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.data.poster_path} />
            <Card.Body >
              <Card.Title>{props.data.title}</Card.Title>
              <Card.Text>{props.data.release_date}</Card.Text>
              <Card.Text>
              {props.data.overview}
              </Card.Text>
              <Card.Text bg="light">
         {comment}
              </Card.Text>

              <Button variant="danger" onClick={() => handelShow(props.data)}>
            See more
          </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>





      
       
     <ModelMovie showFlag={showFlag} handleClose={handleClose} clickedMovie={clickedMovie}  setComment={setComment}
        comment={comment} />
          
        </>
    )}

export default Movie ;