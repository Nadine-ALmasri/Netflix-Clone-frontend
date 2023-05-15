import { useState } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react"
function FavList() {
  const [favArray, setFavArray] = useState([])
  const gitMovieHandler = (item) => {
    const serverUrl = 'http://localhost:3005/addMovie'
    axios.get(serverUrl).then(data => {
      console.log(data)
      setFavArray(data.data)
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
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        )
      })}
    </>)
}


export default FavList;