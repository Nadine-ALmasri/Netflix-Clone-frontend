import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


function ModelMovie(props) {
 
  const addMovieHandler = (data) => {
    const serverUrl = 'http://localhost:3005/addMovie'
    axios.post(serverUrl, data)
      .then(respons => {
 console.log(data.data)
      }).catch((error) => {
        console.log(error)
      })}
  return (<>
  
 
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovieHandler(props.clickedMovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

  
  
  
  
  
  
  







  /* <>
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
         
        <Modal.img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.clickedMovie.poster_path} width='100%'></Modal.img>
        
          <Modal.Title>hhg</Modal.Title>
        </Modal.Header>
        <Modal.Body>jg</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{props.handleClose(addMovieHandler(props.clickedMovie)) }}>
            add to Favourite
          </Button>
        </Modal.Footer>
      </Modal>

    </>*/
 


export default ModelMovie;
