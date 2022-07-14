import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp() {
  return (
    <Navbar class='nav sticky-top' id="navbar" expand="lg">
      <Container id='container'>
        <Navbar.Brand href="#home">
          <lord-icon
            src="https://cdn.lordicon.com/igpbsrza.json"
            trigger="hover"
            colors="primary:#474747"
            style= {{width:'1.7em', height: '1.7em'}}>
          </lord-icon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="responsive-menu"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <div class="container" id='links-container'>
            <Nav class="row">
              <div class="col" id='home-link'><Nav.Link href="#home" id="nav-link"><p>Home</p></Nav.Link></div>
              <div class="col"><Nav.Link href="#link" id="nav-link"><p>How it works</p></Nav.Link></div>
              <div class="col"><Nav.Link href="#link" id="nav-link"><p>Use web App</p></Nav.Link></div>
              <div class="col">
                <NavDropdown title="+" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">about</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">github repository</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">ilustrations</NavDropdown.Item>
                  <NavDropdown.Divider style={{ color: '#efefef' }}/>
                  <NavDropdown.Item href="#action/3.4">want to chat?</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
