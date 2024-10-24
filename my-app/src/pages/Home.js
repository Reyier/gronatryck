import React from "react";
import "../styles/home.css";
import Button from "../components/Button";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  const categorylist = [
    {
      img: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg",
      alt: "Cool tröja",
      label: "T-shirt",
    },
    {
      img: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg",
      alt: "Västar",
      label: "Västar",
    },
    {
      img: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0.jpg",
      alt: "Pike",
      label: "Pike",
    },
    {
      img: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0.jpg",
      alt: "Tröjor",
      label: "Tröjor",
    },
  ];

  return (
    <div className="home-page">
      <Hero />
      <div className="body-container">
        <div>
          <PopularCategories categoryList={categorylist} />

          {/* <div className="btn-container">
            <Button
              to="/alla-kategorier"
              className="main-btn"
              content="Alla Kategorier"
            />
            </div> */}
        </div>

        <section className="certified-section">
          <h1 className="section-heading heading-3">Rättvisecertifierade</h1>
          <div className="certified-content">
            <div className="certified-text">
              <div className="eco-label">
                <div className="label-with-bg">
                  <h5 className="eco main-body">Ekologiskt</h5>
                </div>
              </div>

              <div className="eco-text-container">
                <p className="main-body">
                  Vår passion för miljön och rättvisa genomsyrar allt vi gör –
                  från att erbjuda hållbara och rättvisemärkta textilier till
                  att säkerställa att våra kunder får genomtänkta och hållbara
                  helhetslösningar för sin marknadsföring, utan att någonsin
                  kompromissa med våra värderingar. Tillsammans med våra
                  långvariga samarbetspartners, som delar vår vision om en
                  grönare och mer rättvis framtid, arbetar vi ständigt för att
                  minimera miljöpåverkan genom hela leveranskedjan. Genom att
                  välja Gröna Tryck för dina profilkläder gör du ett medvetet
                  och hållbart val som både du och dina medarbetare kan bära med
                  stolthet, varje dag.
                </p>
              </div>
            </div>
            <div className="certified-image half-img">
              <img
                src="/img/decorative/new-balance-brick-wood-57-40-2.jpg"
                alt="Person wearing sustainable clothing"
              />
            </div>
          </div>

          <Button
            to="/mer-info"
            className=" main-btn btn-container"
            content="Läs mer"
          />
        </section>

        {/* Section 5: Beställningsprocess */}
        <section className="order-process">
          <h1 className="section-heading heading-3">Beställningsprocess</h1>
          <div className="process-steps">
            {Array.from({ length: 4 }, (_, index) => (
              <React.Fragment key={index}>
                <div className={`heading-3`}>
                  <span className="process-step-number">{index + 1}</span>
                </div>
                {index < 3 && <span className="process-arrow">→</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="process-description main-body">
            Välj, anpassa och beställ i stora volymer – vi gör bulk enkelt och
            hållbart.
          </p>
        </section>

        {/* Section 6: Testimonial */}
        <section className="testimonial-section">
          <h1 className="section-heading heading-3">
            Petter väljer rättvisemärkta kläder för sina fans
          </h1>

          <div className="testimonial-label">
            <div className="label-with-bg ">
              <span className="eco">★ ★ ★</span>
            </div>
          </div>

          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              <p className="main-body">
                “Jag vill att min merch speglar mina värderingar, och tack vare
                Gröna Tryck kunde jag erbjuda mina fans produkter jag verkligen
                står bakom,” säger Petter.
              </p>
              <br></br>
              <p className="main-body">
                “Det var också otroligt smidigt att beställa i bulk och få allt
                levererat snabbt, samtidigt som jag vet att produkterna är
                certifierade och miljövänliga.”
              </p>
            <div className="btn-container">
              <Button
            to="/kundcase"
            className=" main-btn btn-container"
            content="Se mer om våra arbeten"
          />
</div>
            </blockquote>
            <div className="testimonial-image">
              
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZUGI3aCcwaPeDQ6nZsiMnmt7oX8-3BRqJg&s"
                alt="Petter"
              />
            </div>
          </div>
        </section>

        <section className="sustainability-section">
          <div className="sustainability-container">
            <h1 className="section-heading subheading-1">Tryck med omtanke</h1>
            <p className="main-body">– hållbarhet i varje detalj.</p>
          </div>
        </section>

        {/* Section 7: Membership Registration */}
        <section className="membership-section">
          <div className="brush-background"></div> {/* Background div */}
          <form className="membership-form">
            <p className="membership-subheading main-body">
              Var först med att ta del av våra nyheter och härliga erbjudanden.
              Anmäl dig till vårt nyhetsbrev!
            </p>
            <input
              type="email"
              className="email-input"
              placeholder="Din e-post"
              required
            />
            <button type="submit" className=" main-btn ">
              Prenumerera nu!
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
