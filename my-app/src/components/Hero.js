import { useState } from "react";
import "../styles/hero.css";
import Button from "./Button";
import HeroDisplay from "./HeroDisplay.js"; 

export default function Hero() {
  const [video, setVideo] = useState(true);
  return (
    <section className="hero-section">
      <div>
      <HeroDisplay media={video} />
      </div>
      <div className="hero-content-container container">
        <div className="hero-content">
          <span style={{ textTransform: "uppercase", fontWeight: "300" }}>
            Most Northern Official Stanley Stella Dealer
          </span>
          <h1 className="main-heading">Hållbart Tryck, Rättvis Framtid.</h1>
          <p>
            Välkommen till Gröna Tryck – din pålitliga partner för hållbara och
            rättvisemärkta trycklösningar och profilkläder. Vi kombinerar modern
            teknik med miljömedvetenhet för att leverera högkvalitativa
            produkter, anpassade efter dina behov. Utforska vårt utbud och var
            med och bidra till en mer hållbar framtid.
          </p>
          <div style={{ display: "flex", gap: "1.6rem" }}>
            <Button
              to="/sortiment"
              content={"Utforska vårt sortiment"}
              className="main-btn"
            />
            <Button
              to="/om-oss"
              content="Vår historia"
              className="second-btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
