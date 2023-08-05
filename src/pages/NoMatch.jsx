import React from 'react';
import './NoMatch.css';

function NoMatch() {
  return (
    <div className="no-match-container">
      <h2 className="no-match-title">404 - Page Not Found</h2>
      <p className="no-match-text">
        Oops! The page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NoMatch;
