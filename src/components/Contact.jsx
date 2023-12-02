import React from 'react';
import { Form, Button } from 'semantic-ui-react'; // Import Semantic UI Form and Button components

export default function ContactForm() {
  return (
    <Form>
      {/* Form not yet functional to send emails yet */}
      <h2>Contact Me!</h2>
      <p>Feel free to get in touch with me below!</p>
      <Form.Field>
        <label>Name:</label>
        <input type="text" name="name" />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input type="email" name="email" />
      </Form.Field>
      <Form.Field>
        <label>Message:</label>
        <textarea name="message" />
      </Form.Field>
      <Button primary type="submit">Submit</Button>
    </Form>
  );
}