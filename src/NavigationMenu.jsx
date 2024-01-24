import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navMenu = ["All", "Full Stack", "Data Science", "Cyber Security", "Career"];
const navLink = ["/", "/fullStack", "/dataScienec", "/cyberSecurity", "/career"];

const NavigationMenu = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {navMenu.map((data, index) => (
              <Nav.Link key={index} as={Link} to={navLink[index]}>
                {data}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationMenu;
