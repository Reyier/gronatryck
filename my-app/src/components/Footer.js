import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../styles/footer.css"; // Make sure to link your CSS

const Footer = () => {
  return (
    <div className="footer">
      {/* Mobile and Tablet Footer */}
      <div className="footer-mobile">
        <div className="footer-links">
          <details>
            <summary>Kontakt</summary>
            <div className="footer-text-container">
              <p>
                <img src="./img/decorative/icons/phone_line_icon.png"></img>{" "}
                Tel: <a href="tel:+4690131340">+46 (0)90 13 13 40</a>
              </p>
              <p>
                <img src="./img/decorative/icons/mail_icon.png"></img> Email:{" "}
                <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a>
              </p>
              <p>
                <img src="./img/decorative/icons/location_icon.png"></img>{" "}
                Adress: Västra Kyrkogatan 1B, 903 29 Umeå, Sverige
              </p>
            </div>
          </details>
          <details>
            <summary>Hjälp</summary>
            <div className="Page-links">
              <Link to="/">FAQ</Link>
              <Link to="/om-grona-tryck">Om oss</Link>
              <Link to="/kopvillkor">Köpvillkor</Link>
              <Link to="/kontakt">Kontakt oss</Link>
              <Link to="/om-grona-tryck">Jobba hos oss</Link>
            </div>
          </details>
        </div>
        <div className="social-media">
          <p>Vi finns även här</p>
          <div className="icons">
            <a
              href="https://www.facebook.com/gronatryck/?locale=sv_SE"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/gronatryck/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="icon" />
            </a>
            <a
              href="https://www.youtube.com/@gronatryck508"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            <a
              href="https://www.instagram.com/gronatryck/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
        <p className="copyright">Copyright © gröna tryck 2024</p>
      </div>

      {/* Desktop Footer */}
      <div className="footer-desktop">
        <div className="footer-columns">
          <div className="footer-logo">
            <img
              src="./img/decorative/gronatryck_logo_webb.png"
              alt="Gröna Tryck logo"
            />
            <p>Tryck med omtanke - hållbarhet i varje detalj</p>
          </div>
          <div className="footer-column">
            <h4>Kontakt</h4>
            <p>
              Tel: <a href="tel:+4690131340">+46 (0)90 13 13 40</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:kontakt@gronatryck.se">kontakt@gronatryck.se</a>
            </p>
            <p>Adress: Västra Kyrkogatan 1B, 903 29 Umeå, Sverige</p>
          </div>
          <div className="footer-column">
            <h4>Hjälp</h4>
            <Link to="/">FAQ</Link>
              <Link to="/om-grona-tryck">Om oss</Link>
              <Link to="/kopvillkor">Köpvillkor</Link>
              <Link to="/kontakt">Kontakt oss</Link>
              <Link to="/om-grona-tryck">Jobba hos oss</Link>
          </div>
          <div className="footer-column">
            <h4>Vi finns även här</h4>
            <div className="icons">
              <a
                href="https://www.facebook.com/gronatryck/?locale=sv_SE"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/gronatryck/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@gronatryck508"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
              <a
                href="https://www.instagram.com/gronatryck/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright © gröna tryck 2024</p>
      </div>
    </div>
  );
};

export default Footer;
