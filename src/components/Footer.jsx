'use client'; 

import React from 'react';

const FooterStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
};

export default function Footer() {
  return (
    <footer style={FooterStyle}>
      <p>&copy; 2025 Best Footballers. All rights reserved.<br></br>
      Made By Aditya And Prateek</p>
    </footer>
  );
}