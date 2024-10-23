import '../styles/Categories.css';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


import PopularCategories from "../components/PopularCategories";
import Breadcrumb from '../components/Breadcrumb';


const Categories = () => {
  const categorylist = [{
    to: '/produkter/kategori/t-shirts',
    img: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg",
    alt: "Cool tröja",
    label: "T-shirt",

  },
  {
    to: '/produkter/kategori/vastar',
    img: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg",
    alt: "Västar",
    label: "Västar",

  },{
    to: '/produkter/kategori/jackor',
    img: "/img/informative/Trekker_Desert Dust_Duo_Front_Main_0.jpg",
    alt: "Jackor",
    label: "Jackor",

  },{
    to: '/produkter/kategori/huvtrojor',
    img: "/img/informative/Cruiser 2.0_Heather Haze_Duo_Front_Main_0.jpg",
    alt: "Huvtröjor",
    label: "Huvtröjor",

  }
  ,
  {
    to: '/produkter/kategori/Skjortor',
    img: "/img/informative/Stella Muser_Heritage Brown_Duo_Front_Main_0.jpg",
    alt: "Skjortor",
    label: "Skjortor",

  },{
    to: '/produkter/kategori/pikeer',
    img: "/img/informative/Stella Quester_Burgundy_Studio_Front_Main_5.jpg",
    alt: "Pikeer",
    label: "Pikeer",

  }
  ,
  {
    to: '/produkter/kategori/sweatshirts',
    img: "/img/informative/Stella Serena_Blue Ice_Studio_Front_Main_5.jpg",
    alt: "Sweatshirts",
    label: "Sweatshirts",

  },{
    to: '/produkter/kategori/Underkläder',
    img: "/img/informative/Stella Paloma_Off White_Duo_Front_Main_0.jpg",
    alt: "Underkläder",
    label: "Underkläder",

  }]
  
  return (
    <div>

        <Breadcrumb/>
      
        <PopularCategories  categoryList={categorylist}/>

    </div>
  
  );
}

export default Categories
