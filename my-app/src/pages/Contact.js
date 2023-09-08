import React from 'react';
import '../App.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please feel free to get in touch with us. We'll be happy to assist you.</p>

      <div className="contact-form">
        <h2>Contact Form</h2>
        {/* Your contact form HTML goes here */}
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
