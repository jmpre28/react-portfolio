import React from 'react';
import '../assets/css/Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="navbar navbar-dark">
        <div className="container">
          <span className="navbar-text">
            &copy; Jake Preciado. All rights reserved.
            <div className="footer-content">
              <a href="https://github.com/jmpre28">
                Visit My GitHub!
              </a>
            </div>
          </span>
        </div>
      </footer>
    </>
  );
};