import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
       <Link to={"/"}> <a className="btn">Go back to Home</a></Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
