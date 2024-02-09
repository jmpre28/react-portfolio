import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import '../assets/css/contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', formData);

    // Show the modal
    setShowModal(true);
  };

  const handleClose = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className='form-body'>
      <Container>
        <h2>Lets connect!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCompany">
            <Form.Label>Company (optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Type your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit">Send Message</Button>
        </Form>
      </Container>

      {/* Modal for displaying a message */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This contact form is currently under construction!</p>
          <p>You can reach out to me at jacobpreciado@gmail.com, or you can visit my <a href='https://www.linkedin.com/in/jake-preciado-b2174a2a9/'>LinkedIn!</a></p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
