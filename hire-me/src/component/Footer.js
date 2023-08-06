// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} One_Hire. All rights reserved.
    </footer>
  );
};

export default Footer;
