import React, { useState } from 'react';
import '../styles/Durable-Materials.css';
import { useNavigate } from "react-router-dom";


const DurableMaterials = () => {


    return (
        <div className="DurableMaterials-page">
    
            <div className="DurableMaterials-container">
                <div className="cart-heading">
                    <h1 className="heading-3">Hållbarhetsarbete</h1>
                </div>
    
    
                <div className="DurableMaterials-container">
                    <h1 className="section-heading heading-3">Pionjärer inom ftalatfria färger</h1>
                     <p className="main-body">
                     Gröna Tryck var först i Sverige att standardisera ftalatfri screenfärg för alla våra tryck, redan 2009. Ftalater är ämnen som kan störa fortplantningsförmågan och enligt Sveriges miljömål ska nyproducerade varor vara fria från dessa skadliga ämnen. Därför använder vi alltid tryckfärger som är helt fria från ftalater, både i vår egen produktion och hos våra samarbetspartners.
                     </p>
                    <div className="imges-container"> 
                        <img className="kundansvariga-img" src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg"/>
                        <img className="kundansvariga-img" src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg"/>
                    </div>
                    <h1 className="section-heading heading-3">Vår passion för en giftfri och hållbar framtid</h1>
                    <p className="main-body">
                    <br/><br/> På Gröna Tryck är hållbarhet alltid den främsta prioriteringen. Vi strävar ständigt efter att minimera vår miljöpåverkan och säkerställa rättvisa arbetsvillkor genom hela produktionskedjan. <br/><br/>
                        Med ett starkt engagemang för Sveriges miljökvalitetsmål arbetar vi målmedvetet för att våra produkter och tryckprocesser ska vara så miljövänliga som möjligt. Hos Gröna Tryck får du inte bara profilkläder och produkter av hög kvalitet, du kan också vara säker på att de är producerade på ett sätt som värnar om både miljön och de människor som tillverkar dem. Vi tar ansvar för hela produktionskedjan – från råmaterial till färdig produkt – och vi ser till att våra kunder kan bära våra produkter med stolthet. <br/><br/>
                        Här kan du läsa mer om hur vi uppnår detta genom noggrant utvalda material och certifieringar, samt genom våra trycktekniker som ligger i framkant.
                    </p>
                  
                    
                    
                    
                </div>
    
            </div>
    
    
        </div>
    )
    
    }
    export default DurableMaterials