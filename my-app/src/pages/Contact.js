import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"; // Assuming the same styles are used for both components

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // For storing the image URL
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];

      if (file && file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewUrl(imageUrl); // Save URL for preview
      }

      setFormData({
        ...formData,
        file: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data in localStorage
    localStorage.setItem("contactData", JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Tack för att du kontaktar oss!</h2>
          <p>Vi kommer att kontakta dig så snart som möjligt.</p>
          <Link to="/">Hem</Link>
        </div>
      ) : (
        <div>
          <div className="cart-heading">
            <h1 className="heading-3 header-label">Kontakta oss</h1>
          </div>

          

          <div className="login-container print-container">

          <p className="main-body">
              Har du frågor, funderingar eller idéer? Tveka inte att höra av
              dig! Vårt team är här för att hjälpa dig!
              </p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <h6 className="input-label">Namn:</h6>
                <input
                  className="input-login"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="För & Efternamn"
                />
              </div>

              <div className="input-container">
                <h6 className="input-label">Email</h6>
                <input
                  className="input-login"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="test@test.se"
                  required
                />
              </div>

              <div className="input-container">
                <h6 className="input-label">Telefonnummer</h6>
                <input
                  className="input-login"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123456789"
                  required
                />
              </div>

              <div className="file-upload-section input-container">
                <h6 className="input-label">Ladda upp en fil eller bild</h6>
                <input type="file" name="file" onChange={handleChange} />
              </div>

              {imagePreviewUrl && ( // Show preview of the image
                <div>
                  <p>Förhandsvisning av vald bild:</p>
                  <img
                    src={imagePreviewUrl}
                    alt="Förhandsvisning"
                    style={{ width: "200px", height: "auto" }}
                  />
                </div>
              )}

              <div className="input-container">
                <h6 className="input-label">Meddelande</h6>
                <textarea
                  className="input-login"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv ett meddelande..."
                  required
                ></textarea>
              </div>

              <div className="btn-container-1">
                <button className="main-btn" type="submit">
                  Skicka meddelande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
