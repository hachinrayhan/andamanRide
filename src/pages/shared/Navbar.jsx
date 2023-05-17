import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

function BSNavbar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container className='py-3'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='text-uppercase col d-flex justify-content-center'>
                        <Link to={'/'} className='text-decoration-none me-3 my-2'>Home</Link>
                        <Link to={''} className='text-decoration-none me-3 my-2'>Activities</Link>
                        <Link to={'/'} className='text-decoration-none me-3 my-2 fw-bold'>Andaman Ride</Link>
                        <Link to={''} className='text-decoration-none me-3 my-2'>Car Rental</Link>
                        <Link to={'/contact-us'} className='text-decoration-none me-3 my-2'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BSNavbar;