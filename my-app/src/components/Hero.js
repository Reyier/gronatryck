import { useState } from "react";
import "../styles/hero.css";
import Button from "./Button";

export default function Hero() {
  /* Byt till useffect eller kolla om man kan ändra dena variabel beroende på nätverk eller brandbredd, så att bild 
    visas om man ansluter från telefon. Byt till false om du inte orkar att videon spelar helat tiden*/
  const [video, setVideo] = useState(true);
  return (
    <section className="hero-section">
      <HeroDisplay media={video} />

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
            {" "}
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

function HeroDisplay({ media }) {
  if (media) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        id="hero-video"
        style={{ display: "block" }}
      >
        <source
          src="/videos/STST_AW24_CAMPAIGN_VIDEO_NO_TEXT.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <img
        src="/img/cover/Stanley_Stella_AW24_Timeless_Outerwear_Mix_01.jpg"
        alt="Hero"
        className="hero-image"
        id="hero-image"
      />
    );
  }
}
