import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SERVICE_ID = import.meta.env.VITE_serviceId;
const TEMPLATE_ID = import.meta.env.VITE_templateId;
const PUBLIC_KEY = import.meta.env.VITE_publicKey;

const BookingForm = ({ cab }) => {
  BookingForm.propTypes = {
    cab: PropTypes.object.isRequired,
  };
  const navigate = useNavigate();
  const form = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
        navigate('/');
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div className="container col-md-9 col-lg-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h2>Booking Form</h2>
      <Form ref={form} onSubmit={handleSubmit}>

        <Form.Group className='mb-3' controlId="title">
          <Form.Control name='title' type="text" value={cab?.title || ''} readOnly />
        </Form.Group>

        <Form.Group className='mb-3' controlId="guide">
          <Form.Control name='guide' type="text" value={cab?.guide || ''} readOnly />
        </Form.Group>

        <Form.Group className='mb-3' controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className='mb-3' controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className='mb-3' controlId="mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control name='mobile' type="text" placeholder="Enter your mobile number" required />
        </Form.Group>

        <Form.Group className='mb-3' controlId="totalAdults">
          <Form.Label>Total Adults</Form.Label>
          <Form.Control name='totalAdults' type="number" placeholder="Enter the number of adults" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="totalKids">
          <Form.Label>Total Kids</Form.Label>
          <Form.Control name='totalKids' type="number" placeholder="Enter the number of kids" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="message">
          <Form.Label>Write Message</Form.Label>
          <Form.Control name='message' as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button className='w-100' variant="success" type="submit">
          Submit Enquiry
        </Button>
      </Form>
      <p className='text-center'>No money charged in this step</p>
    </div>
  );
};

export default BookingForm;
