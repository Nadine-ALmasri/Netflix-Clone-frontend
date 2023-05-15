 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars (){
      return (
        <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Netflix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FavList">FavList</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
     
        
        </>)
      
}
export default Navbars;