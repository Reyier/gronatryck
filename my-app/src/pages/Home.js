import React from "react";
import "../styles/home.css";
import Button from "../components/Button";
import Hero from "../components/Hero";
import PopularCategories from "../components/PopularCategories";

const Home = () => {
  const categorylist = [
    {
      to: "/produkter",
      img: "/img/decorative/gronatryck_group_img.png",
      alt: "Cool tröja",
      label: "Profilkläder",
    },
    {
      to: "/tjanster",
      img: "/img/decorative/gronatryck_print_img.png",
      alt: "Västar",
      label: "Tjänster",
    },
    {
      to: "/kundcase",
      img: "/img/decorative/gronatryck_clientcase_tshirt_img.png",
      alt: "Pike",
      label: "Kundberättelser",
    },
    {
      to: "/produkter",
      img: "/img/decorative/gronatryck_fence_img.png",
      alt: "Tröjor",
      label: "Nyheter",
    },
  ];

  return (
    <div className="home-page">
      <Hero />
      <div className="body-container">
        <div>
          <PopularCategories categoryList={categorylist} />
        </div>

        <section className="certified-section">
          <div className="certified-content">
            <div className="certified-text">
              <h1 className="section-heading heading-3">Vår drivkraft</h1>
              <div className="eco-label"></div>

              <div className="eco-text-container">
                <p className="main-body margin">
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
                <Button
                  to="/om-grona-tryck"
                  className=" main-btn btn-container"
                  content="Läs mer"
                />
              </div>
            </div>

            <div className="certified-image half-img">
              <img
                src="/img/decorative/gronatryck_jacket_img.png"
                alt="en man med ryggen vänd iklädd en stilig beigefärgad jacka"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Beställningsprocess */}
        <section className="order-process">
          <h1 className="section-heading heading-3">Beställningsprocess</h1>
          <div className="process-steps main-body">
            {[
              {
                step: "Välj produkt",
                description: "Lägg produkter i varukorgen på vår hemsida.",
              },
              {
                step: "Offertförfrågan",
                description:
                  "Din varukorg sammanställs till en offert som skickas till oss.",
              },
              {
                step: "Granskning & Förslag",
                description:
                  "Vi granskar offerten och ger dig förslag på tryck.",
              },
              {
                step: "Orderbekräftelse",
                description:
                  "Efter att du godkänt förslaget startar tryckprocessen.",
              },
            ].map((stepInfo, index, array) => (
              <div key={index} className="process-step">
                <div className="process-circle">{index + 1}</div>
                <p className="process-step-title">{stepInfo.step}</p>
                <p className="process-step-description">
                  {stepInfo.description}
                </p>

                {index < array.length - 1 ? (
                  <span className="process-divider">→</span>
                ) : (
                  <span className="process-checkmark">✓</span>
                )}
              </div>
            ))}
          </div>
          <p className="process-description main-body">
            Vi gör bulkbeställningar enkla och hållbara – från offert till
            leverans.
          </p>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-label">
            {/* Optional label section can go here */}
          </div>

          <div className="testimonial-content">
            <blockquote className="testimonial-quote">
              <h1 className="section-heading heading-3">
                Peter väljer rättvisemärkta kläder för sina fans
              </h1>

              <div className="testimonial-content">
                <div className="testimonial-image">
                  <img
                    src="/img/decorative/gronatryck_jeanjacket_img.png"
                    alt="en man med ryggen vänd iklädd en stilig jeans jacka"
                  />
                </div>

                <div className="testimonial-text-container">
                  {" "}
                  {/* Added this div for styling */}
                  <p className="main-body testimonial-text">
                    “Jag vill att min merch speglar mina värderingar, och tack
                    vare Gröna Tryck kunde jag erbjuda mina fans produkter jag
                    verkligen står bakom,” säger Peter.
                  </p>
                  <p className="main-body testimonial-text">
                    “Det var också otroligt smidigt att beställa i bulk och få
                    allt levererat snabbt, samtidigt som jag vet att produkterna
                    är certifierade och miljövänliga.”
                  </p>
                  <div className="">
                    <Button
                      to="/kundcase"
                      className="main-btn btn-container"
                      content="Se mer om våra arbeten"
                    />
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        {/* <section className="sustainability-section">
          <div className="sustainability-container">
            <h1 className="section-heading subheading-1">Tryck med omtanke</h1>
            <p className="main-body">– hållbarhet i varje detalj.</p>
          </div>
        </section> */}

        {/* Section 7: Membership Registration */}
        <section className="membership-section">
          <div className="brush-background"></div>
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
