import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation to check if all fields are filled out
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        message: 'Please fill out all fields before submitting.',
      });
    } else {
      // all fields completed
      setFormStatus({
        success: true,
        message: 'Message sent successfully!',
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Contact Me!</h2>
      <p>Feel free to get in touch with me below!</p>
      <Form.Field>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Field>
      <Button primary type="submit">
        Submit
      </Button>
      {formStatus && (
        <Message
          positive={formStatus.success}
          negative={!formStatus.success}
          header={formStatus.success ? 'Success' : 'Error'}
          content={formStatus.message}
        />
      )}
    </Form>
  );
}