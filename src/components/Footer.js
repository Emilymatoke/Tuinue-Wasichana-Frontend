import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="footer-heading">Support Our Cause</h3>
            <p className="footer-text">
              Join us in empowering school-going girls by providing them with access to sanitary towels, clean water, and sanitation facilities.
            </p>
            <button className="btn btn-primary">Donate Now</button>
          </div>
          <div className="col-md-6">
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">
              Phone: <span className="contact-info">071234567</span><br />
              Address: <span className="contact-info">Nairobi, Kenya</span>
            </p>
            <h3 className="footer-heading">Stay Connected</h3>
            <p className="footer-text">Follow us on social media for updates and inspiring stories:</p>
            <ul className="social-icons">
              <li><a href="#" className="social-icon"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="social-icon"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="social-icon"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p className="bottom-text">&copy; 2024 Tuinue Wasichana - Empowering School-Going Girls</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
