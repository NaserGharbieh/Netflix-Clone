import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars(){
return(
<div style={{  width:"100%"}}>

        <Navbar  expand="xxl"  >
        
        <Navbar.Brand href="/">Netflix Clone</Navbar.Brand>
        <Navbar expand="lg" variant="dark" bg="light">
    </Navbar>
          <Nav>
            <Nav.Link href="/">Home </Nav.Link>
            <Nav.Link href="/favorite">Favorite movies</Nav.Link>
          </Nav>
          
    </Navbar>
</div>

)
    
}
export default Navbars;