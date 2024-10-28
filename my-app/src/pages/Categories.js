import NavList from "../components/NavList";
import PopularCategories from "../components/PopularCategories";
import "../styles/Categories.css"; 

const categories = [
  { to: "/produkter", textContent: "Visa alla" },
  { to: "/produkter", textContent: "Nyheter" },
  { to: "/produkter", textContent: "Bästsäljare" },
  { to: "/produkter", textContent: "Kollektioner" },
  { to: "/kategori", textContent: "Kläder" },
  { to: "/produkter", textContent: "Accessoarer" },
  { to: "/produkter", textContent: "Huvudbonader" },
  { to: "/produkter", textContent: "Barnkläder" },
  { to: "/produkter", textContent: "Gåvor" },
  { to: "/tjanster", textContent: "Tjänster" },
];

export default function Sortiment() {
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
      img: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0.jpg",
      alt: "Jackor",
      label: "Jackor",
    },
    {
      img: "/img/informative/Connector 2.0_French Navy_Duo_Front_Main_0.jpg",
      alt: "Huvtröjor",
      label: "Huvtröjor",
    },
    {
      img: "/img/informative/Knoxer_Natural Raw_Duo_Front_Main_0.jpg",
      alt: "Cool tröja",
      label: "Sweatshirts",
    },
    {
      img: "/img/informative/Prepster 2.0_Eco-Heather_Duo_Front_Main_0.jpg",
      alt: "Västar",
      label: "Pikeer",
    },
    {
      img: "/img/informative/Bomber 2.0_Black_Duo_Front_Main_0.jpg",
      alt: "Jackor",
      label: "Jackor",
    },
    {
      img: "/img/cover/Stanley_Stella_AW24_Timeless_Outerwear_Mix_01.jpg",
      alt: "Se alla",
      label: "Se alla",
    },
  ];

  return (
    <div className="container" style={{ marginBlockStart: "10.8rem" }}>
     <div className="categori">

      <div className="nav-heading">
        <h1 className="section-heading heading-3">Populära Kategori</h1>
      </div>
      
      <PopularCategories categoryList={categorylist} />
      </div>
    </div>
  );
}
