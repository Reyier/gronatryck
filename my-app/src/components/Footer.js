import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'; // Make sure to create and link this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li>Kontakt</li>
                <li>Köpvillkor</li>
                <li>Jobba hos oss</li>
            </ul>
            <div className="social-media">
                <p>Vi finns även här</p>
                <div className="icons">
                    <FaFacebookF className="icon" />
                    <FaLinkedinIn className="icon" />
                    <FaYoutube className="icon" />
                    <FaInstagram className="icon" />
                </div>
            </div>
            <p className="copyright">Copyright © gröna tryck 2024</p>
        </footer>
    );
}

export default Footer;

