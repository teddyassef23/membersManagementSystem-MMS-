import React from 'react';
import '../components/styles/footer.css'; 

function Footer() {
  return (
    <footer className="footer bg-dark fixed-bottom">
      <div className="icon-container">
        <a href="https://www.youtube.com/channel/UCGyPxfKfieC26FqVex6RddA/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/youtube.png" alt="YouTube" className="icon"/></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook" className="icon"/></a>
      </div>
     
    </footer>
  );
}

export default Footer;

