import React from "react";
import NavbarMax from "../components/Header";
import "../styles/Stanley.css";

const Stanley = () => {
  return (
    <div className="stanley-page">
      <div className="stanley-page-container">
        <div className="cart-heading">
          <h1 className="heading-3">Stanley / Stella </h1>
        </div>

        <div className="stanley-container">
          <div className="stanley-container-p">
            <p className="main-body">
              Gröna Tryck har samarbetat med Stanley/Stella sedan 2013, och från
              2021 blev vi "Most Northern" Official Dealer samt Selected Dealer
              för ytterkläder. Deras plagg kombinerar modern passform och hög
              kvalitet, med ett stort urval av säsongsanpassade färger och
              modeller – perfekt för företag, organisationer och designers.{" "}
              <br /> <br />
              Vi erbjuder även customisering, som eget tryck i nacken, för att
              matcha ditt varumärke. Stanley/Stella tillverkar alla kläder med
              fokus på miljö och rättvisa arbetsvillkor. De använder ekologisk
              och återvunnen bomull, polyester och Lenzing Modal, med
              tillverkning under Fairwear-certifierade förhållanden.
              <br />
              <br />
              Du kan vara stolt över kläderna – både för deras stil och
              hållbarhet. Vi kompletterar detta genom patch, brodyr eller
              screentryck för att skapa plagg som representerar ditt varumärke i
              toppklass!
              <br />
              <br />
            </p>
          </div>

          <img
            className="stanley-image"
            src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg"
          />

          <div className="btn-container-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Stanley;
