import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>

        <div>
          <label for="email">Email address:</label>
          <input
            type="text"
            placeholder="Email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea
            defaultValue={message}
            name="message"
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
