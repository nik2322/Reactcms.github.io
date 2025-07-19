import React, { useState } from "react";
import './Main.css';

function Main() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="main-content">
      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Main;
