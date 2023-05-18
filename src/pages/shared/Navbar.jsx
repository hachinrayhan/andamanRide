import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo/logo.png';

function BSNavbar() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='text-uppercase col d-flex justify-content-center align-items-center'>
                        <Link to={'/'} className='text-decoration-none me-3 my-2'>Home</Link>
                        <Link to={''} className='text-decoration-none me-3 my-2'>Activities</Link>
                        <Link to={'/'} className='text-decoration-none me-3 mb-3'><img style={{ width: '150px' }} src={logo} alt="" /></Link>
                        <Link to={''} className='text-decoration-none me-3 my-2'>Car Rental</Link>
                        <Link to={'/contact-us'} className='text-decoration-none me-3 my-2'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BSNavbar;