import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BSNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className=''>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='text-uppercase col d-flex justify-content-center'>
                        <Link to={'/'} className='text-decoration-none me-3 text-light'>Home</Link>
                        <Link to={''} className='text-decoration-none me-3 text-light'>Activities</Link>
                        <Link to={'/'} className='text-decoration-none me-3 text-light fw-bold'>Andaman Ride</Link>
                        <Link to={''} className='text-decoration-none me-3 text-light'>Car Rental</Link>
                        <Link to={''} className='text-decoration-none me-3 text-light'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BSNavbar;