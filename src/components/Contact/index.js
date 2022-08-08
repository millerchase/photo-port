import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = formState;

  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
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
            onChange={handleChange}
            name="name"
          />
        </div>

        <div>
          <label for="email">Email address:</label>
          <input
            type="text"
            placeholder="Email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea
            defaultValue={message}
            name="message"
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
