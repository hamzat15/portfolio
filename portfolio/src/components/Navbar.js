import react from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Wave } from 'react-animated-text';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import "./Navbar.css";

function NavN() {
  return (
    <Navbar className="navw" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <div className="tt">
          <Wave text="HAMZAT SIBY" />
          <div class="geeks"></div>
        </div>
        <Nav className="ml-auto">
          <Link to="text-center" smooth={true}>
            <button class="btn-3"><span>Acceuil</span></button>
          </Link>
          <Link to="tech" smooth={true}>
            <button class="btn-3"><span>Technologie</span></button>
          </Link>
          < Link to="contactt" smooth={true}>
            <button class="btn-3"><span>Contacte</span></button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavN;