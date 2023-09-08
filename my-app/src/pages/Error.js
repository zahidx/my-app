import React from 'react';
import '../App.css'; // Import the CSS file

const Error = () => {
  return (
    <div className="error">
      <h2>404! Page Not Found</h2>
      <p>We're sorry, but the page you're looking for could not be found.</p>
      <p>Please check the URL or go back to the <a href="/">Home Page</a>.</p>
    </div>
  );
};

export default Error;
