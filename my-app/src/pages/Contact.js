import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    file: null
  });

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // För att lagra bildens URL
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];

      if (file && file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setImagePreviewUrl(imageUrl); // Spara URL för förhandsvisning
      }

      setFormData({
        ...formData,
        file: file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spara data i localStorage
    localStorage.setItem('contactData', JSON.stringify(formData));
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
        <form onSubmit={handleSubmit}>
          <div>
            <label>Namn:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Telefonnummer:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ladda upp en fil eller bild:</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
            />
          </div>
          {imagePreviewUrl && ( // Visa förhandsvisning av bilden
            <div>
              <p>Förhandsvisning av vald bild:</p>
              <img src={imagePreviewUrl} alt="Förhandsvisning" style={{ width: '200px', height: 'auto' }} />
            </div>
          )}
          <div>
            <label>Meddelande:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Skicka</button>
        </form>
      )}
    </div>
  );
}

export default Contact;

