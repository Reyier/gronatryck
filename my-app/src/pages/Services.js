import React from "react";
import "../styles/services.css";
import Button from "../components/Button";



const services = () => {


return (
    <div className="services-page">

        <div className="services-page-container">
            <div className="cart-heading">
                <h1 className="heading-3">Tjänster</h1>
            </div>


            <div className="services-container">
                <h1 className="section-heading heading-3">Egen infärgning utifrån profilfärger</h1>
                <img src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg"/>
                <img src="./img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg"/>
                
                <p className="main-body">från 15kg kläder</p>
                <div className="btn-container-2">
                <Button to="/kontakt" className="main-btn" content="Intresseförfrågan"/>
                <Button to="/kontakt" className="main-btn" content="Mer information"/>
                </div>
            </div>

        </div>


    </div>
)

}
export default services