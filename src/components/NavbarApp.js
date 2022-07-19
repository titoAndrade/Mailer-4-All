import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarApp() {
  return (
    <Navbar class='nav sticky-top' id="navbar" expand="lg">
      <Container id='container'>
        <Navbar.Brand href="#hero-container">
          <lord-icon
            src="https://cdn.lordicon.com/igpbsrza.json"
            trigger="hover"
            colors="primary:#000"
            style= {{width:'1.7em', height: '1.7em'}}>
          </lord-icon>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="responsive-menu"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <div class="container" id='links-container'>
            <Nav class="row">
              <div class="col" id='home-link'><Nav.Link href="#hero-container" id="nav-link"><p>Home</p></Nav.Link></div>
              <div class="col"><Nav.Link href="#how-works-container" id="nav-link"><p>How it works</p></Nav.Link></div>
              <div class="col"><Nav.Link href="#allform" id="nav-link"><p>Use web App</p></Nav.Link></div>
              <div class="col">
                <NavDropdown title="+" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">about</NavDropdown.Item>
                  <NavDropdown.Item href="https://github.com/titoAndrade/Mailer-4-All" target="_blank" rel="noreferrer">repository</NavDropdown.Item>
                  <NavDropdown.Item href="https://icons8.com/illustrations/author/zD2oqC8lLBBA" target="_blank" rel="noreferrer">ilustrations</NavDropdown.Item>
                  <NavDropdown.Divider style={{ color: '#efefef' }}/>
                  <NavDropdown.Item href="https://wa.me/message/MRST6DWHTKRMO1" rel="noreferrer" target="_blank">want to chat?</NavDropdown.Item>
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