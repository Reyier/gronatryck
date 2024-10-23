// src/components/FAQ.js
import React from 'react';
import '../styles/FAQ.css'; 

const FAQ = () => {
  return (
    <section className="faq-section" id="faq">
      <h1 className="section-heading heading-3 stanley-heading">FAQ</h1>
      <div className="faq-item">
      <h2 className="subheading-1">Kan man bara beställa en produkt?</h2>
        <p className="main-body long">
          Det går inte att beställa färre än <strong>***</strong> produkter då vi använder ett bulksystem för att dra ner priserna till våra företagskunder.
        </p>
      </div>
      <div className="faq-item">
      <h2 className="subheading-1">Kan en privatperson beställa hos er?</h2>
        <p className="main-body long">
          Det går jättebra men eftersom vi arbetar med bulk måste beställningen överskrida <strong>***</strong> artiklar.
        </p>
      </div>
      <div className="faq-item">
        <h2 className="subheading-1">Trycker ni själva?</h2>
        <p className="main-body long">
          Vi gör en del av våra tryck själva, medan andra utförs via noggrant utvalda samarbetspartners både i Sverige och utomlands.
        </p>
      </div>
      <div className="faq-item">
      <h2 className="subheading-1">Har ni en butik?</h2>
        <p className="main-body long">I nuläget har vi ingen butik.</p>
      </div>
      <div className="faq-item">
      <h2 className="subheading-1">Vilka material har ni?</h2>
        <p className="main-body long">
          Vi arbetar med en rad olika hållbara material för att säkerställa att våra profilkläder och produkter lever upp till de högsta miljökraven.
          <br />
          <strong>Ekologisk bomull:</strong> Våra kläder är tillverkade av certifierad ekologisk bomull, som odlas utan kemiska bekämpningsmedel eller konstgödsel. Detta säkerställer att bomullen produceras på ett sätt som skyddar både miljön och de människor som arbetar med produktionen.
          <br />
          <strong>Återvunna material:</strong> Vi använder återvunnen PET (R-PET), som tillverkas från återvunna plastflaskor, vilket minskar behovet av att framställa nya råvaror och bidrar till minskad plastanvändning.
          <br />
          <strong>Innovativa blandmaterial:</strong> Våra produkter innehåller även blandningar av ekologisk bomull med hållbara material som Tencel, Modal och återvunnen ull, vilket ger mjuka och slitstarka kläder samtidigt som de är snälla mot miljön.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
