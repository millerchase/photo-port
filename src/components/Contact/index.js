import React from 'react';

function contactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label for="name">Name:</label>
          <input type="text" placeholder="Name" name="name" />
        </div>

        <div>
          <label for="email">Email:</label>
          <input type="text" placeholder="Email" name="email" />
        </div>

        <div>
          <label for="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default contactForm;
