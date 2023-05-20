import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModelFavMovie(props) {
    

    const updateMovie = async (e) =>{
        e.preventDefault();
        console.log(e.target.title.value)

        const obj = {
            title : e.target.title.value,
           
           release_date : e.target.release_date.value,
           poster_path : e.target.poster_path.value,
           overview : e.target.overview.value,
           
           
        }
        console.log(obj)
        
        const serverURL = `${process.env.REACT_APP_serverURL}/updatedMovie/${props.clickedFavMovie.id}`;
        const result = await axios.put(serverURL,obj);
        console.log('done',result.data)

        // To close our model 
        props.funClose();

        props.takeNewDataFromUpdatedModal(result.data)
    }
    return (
        <>
      
            <Modal show={props.show} onHide={props.funClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={updateMovie}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title" type="text" defaultValue={props.clickedFavMovie.title}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Poster Path</Form.Label>
                            <Form.Control name="poster_path" type="text" defaultValue={props.clickedFavMovie.poster_path}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>RElease date</Form.Label>
                            <Form.Control name="release_date" type="text" defaultValue={props.clickedFavMovie.release_date}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Overview</Form.Label>
                            <Form.Control name="overview" type="text" defaultValue={props.clickedFavMovie.overview}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.funClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModelFavMovie;
