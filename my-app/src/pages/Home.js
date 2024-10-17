import React from "react";
import "../styles/home.css"; 
import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-content">
          <div className="header-video-overlay"></div>
          <Button to="/produkter" className="main-btn" content="Utforska vårt sortiment"/>
        </div>
      </header>

      <div className="body-container">

      {/* Section 2: Sustainability Message */}
      <section className="sustainability-section">
        <h1 className="main-heading">Tryck med omtanke</h1>
        <p className="subheading">– hållbarhet i varje detalj.</p>
      </section>
      
      {/* Section 3: Popular Categories */}
      <section className="popular-categories">
        <h2 className="section-heading">Populära kategorier</h2>
        <div className="categories-grid">
          <div className="category">
            <img src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg" alt="T-shirt" />
            <div className="category-label">T-shirt</div>
          </div>
          <div className="category">
            <img src="./img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg" alt="Västar" />
            <div className="category-label">Västar</div>
          </div>
          <div className="category">
            <img src="./img/informative/Trekker_Desert Dust_Duo_Front_Main_0.jpg" alt="Jackor" />
            <div className="category-label">Jackor</div>
          </div>
          <div className="category">
            <img src="./img/informative/Cruiser 2.0_Heather Haze_Duo_Front_Main_0.jpg" alt="Huvtröjor" />
            <div className="category-label">Huvtröjor</div>
          </div>
        </div>
        <Button to="/produkter" className="main-btn" content="Alla Kategorier"/>
      </section>

      {/* Section 4: Rättvisecertifierade */}
      <section className="certified-section">
        <h2 className="section-heading">Rättvisecertifierade</h2>
        <div className="certified-content">
          <div className="certified-text">
            <div className="eco-label">ekologiskt</div>
            <p>
              Vår passion för miljön och rättvisa genomsyrar allt vi gör – 
              från att erbjuda ekologiska och rättvisemärkta textilier, till att 
              säkerställa att våra kunder får smarta och hållbara helhetslösningar 
              för sin marknadsföring. Vi är också stolta över våra långvariga 
              samarbeten med partners som delar vår vision om en grönare framtid 
              och hållbar affärsutveckling.
            </p>
            <Button to="/mer-info" className="learn-more-btn" content="Läs mer" />
          </div>
          <div className="certified-image">
            <img src="/path-to-image.jpg" alt="Person wearing sustainable clothing" />
          </div>
        </div>
      </section>


      {/* Section 5: Beställningsprocess */}
      <section className="order-process">
        <h2 className="section-heading">Beställningsprocess</h2>
        <div className="process-steps">
          <div className="step-circle"></div>
          <span className="process-arrow">→</span>
          <div className="step-circle"></div>
          <span className="process-arrow">→</span>
          <div className="step-circle"></div>
          <span className="process-arrow">→</span>
          <div className="step-circle"></div>
        </div>
        <p className="process-description">
          Välj, anpassa och beställ i stora volymer – vi gör bulk enkelt och hållbart.
        </p>
      </section>

      {/* Section 6: Testimonial */}
      <section className="testimonial-section">
        <h2 className="section-heading">Petter väljer rättvisemärkta kläder för sina fans</h2>
        <div className="testimonial-content">
          <div className="rating-stars">
            <span>★ ★ ★</span> {/* Customize based on rating */}
          </div>
          <blockquote className="testimonial-quote">
            <p>“Jag vill att min merch speglar mina värderingar, och tack vare er kunde jag erbjuda mina fans produkter jag verkligen står bakom,” säger Petter.</p>
            <p>“Det var också otroligt smidigt att beställa i bulk och få allt levererat snabbt, samtidigt som jag vet att produkterna är certifierade och miljövänliga.”</p>
          </blockquote>
          <div className="testimonial-image">
            <img src="/path-to-petter-image.jpg" alt="Petter" />
          </div>
        </div>
      </section>

      {/* Section 7: Membership Registration */}
      <section className="membership-section">
        <h2 className="section-heading">Häng med oss!</h2>
        <p className="membership-subheading">Registrera dig som medlem och få bonus på dina köp!</p>
        <form className="membership-form">
          <input
            type="email"
            className="email-input"
            placeholder="Din e-post"
            required
          />
        </form>
        <button type="submit" className="main-btn">Registrera</button>
      </section>
      </div>
    </div>
    
  );
};

export default Home;
