import { useState } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import ModelFavMovie from "./ModelFavMovie";
function FavList(props) {
  const [newArr,setNewArr] = useState([])
  var [favArray, setFavArray] = useState([])
const [show , setShow]=useState(false)
var [clickedFavMovie, setClickedFavMovie] = useState({});
var [clickedDelMovie, setClickedDelMovie] = useState({});
const funShow =(item)=>{
  setShow(true) ;
  setClickedFavMovie(item)
  console.log(item)
  
  clickedFavMovie=item
  console.log(clickedFavMovie)
}

const funClose=()=>{
  setShow(false) ;
}


const takeNewDataFromUpdatedModal = (arr)=>{
  setNewArr(arr)
  console.log(newArr)}




const deleteMovieHandler = (item) => {
  setClickedDelMovie(item)
console.log(item)
console.log(clickedDelMovie)

  const obj = item.id;
  console.log(obj)
console.log(clickedDelMovie.id)
  const serverURL = `${process.env.REACT_APP_serverURL}/DELETE/${item.id}`;
 axios.delete(serverURL, obj).then(data => {
  console.log(data)
   }).catch((error) => {
    console.log(error)
  })

  gitMovieHandler()}



 
 
 
 
 
 
 
  const gitMovieHandler = () => {
    const serverUrl = `${process.env.REACT_APP_serverURL}/addMovie`
    axios.get(serverUrl).then(data => {
      console.log(data)
      setFavArray(data.data)
favArray=data.data
      console.log(favArray)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    gitMovieHandler()
  }, [])

  return (
    <>
      {favArray.map(item => {
        return (<Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={item.id}>
              <Card bg='dark' text="muted" border="muted" >
             
                <Card.Img variant="top" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.poster_path} />
                <Card.Body>
                  <Card.Title><h1>{item.title}</h1></Card.Title>
                  <Card.Text> 
                   
                    <h3>{item.release_date}</h3>
                    <p>{item.overview}</p> 
                    <p>{props.Comment}</p>
                  </Card.Text>
                  <div className="d-grid gap-2">
      <Button variant="secondary" size="lg" onClick={() => funShow(item)}>
       Update
      </Button>
      <Button variant="danger" size="lg" onClick={() => deleteMovieHandler(item)}>
      Remove From Your Favourite List
      </Button>
    </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        )
      })}


<ModelFavMovie show={show} funClose={funClose} clickedFavMovie={clickedFavMovie}takeNewDataFromUpdatedModal={takeNewDataFromUpdatedModal}></ModelFavMovie >


    </>)
}


export default FavList;