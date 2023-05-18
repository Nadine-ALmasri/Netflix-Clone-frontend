import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Movie from './Movie';
function ModelMovie(props) {
 
  const getInputValue = (event)=>{
    // show the user input value to console
   props.setComments ( event.target.value);
  }
//////////////////////////////////
/*const addComments = (item) => {
  const obj = item.id;
  console.log(obj)

  const serverUrl = `http://localhost:3005/addComment/${item.id}`
 
  axios.put(serverUrl, item)
    .then(respons => {
console.log(respons.data)
    }).catch((error) => {
      console.log(error)
      props.handleClose()
    })}*/




///////////////////////////////
  const addMovieHandler = (data) => {
    const serverUrl = `${process.env.REACT_APP_serverURL}/addMovie`
    axios.post(serverUrl, data)
      .then(respons => {
console.log(respons.data)
      }).catch((error) => {
        console.log(error)
      })}
  return (<>
  
 
      <Modal size="lg"bg='dark' text="muted" border="muted"  show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Image src = {"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.clickedMovie.poster_path}></Image>
          <Modal.Title><h1>{props.clickedMovie.title}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{props.clickedMovie.overview}</p></Modal.Body>
        <Modal.Footer>


        <Form.Label htmlFor="inputPassword5"bg="primary" text='danger'>Add Your Comment</Form.Label>
      <Form.Control
         type="text"
         name="comments"
         value={props.comments}
         onChange={getInputValue} 
      />
      <Form.Text id="yourComment" >
        Your comment must be 8-20 characters long, 
      </Form.Text>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>
         { {addMovieHandler(props.clickedMovie)}
        }
        }>
          add to Favourite
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  
  
  );
}

  
  
  
  
  
  
  







 


export default ModelMovie;
