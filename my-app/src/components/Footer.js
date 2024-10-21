import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'; // Make sure to create and link this CSS file


const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-links main-body">
                <li>
                    <Link to="./kontakt">Kontakt</Link>
                </li>
                <li>
                    <Link to="/TermsOfPurchase">Köpvillkor</Link> 
                </li>
                <li>
                    <Link to="/WorkWithUs">Jobba hos oss</Link> 
                </li>
            </ul>
            <div className="social-media">
                <p>Vi finns även här</p>
                <div className="icons ">
                    <a href="https://www.facebook.com/gronatryck/?locale=sv_SE" target='_blank'><FaFacebookF className="icon" /></a>
                    <a href="https://www.linkedin.com/company/gronatryck/" target='_blank'><FaLinkedinIn className="icon" /></a>
                    <a href="https://www.youtube.com/@gronatryck508" target='_blank'><FaYoutube className="icon" /></a>
                    <a href="https://www.instagram.com/gronatryck/" target='_blank'><FaInstagram className="icon" /></a>
                </div>
            </div>
            <p className="copyright">Copyright © gröna tryck 2024</p>
        </div>
    );
}

export default Footer;

