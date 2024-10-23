import NavList from "../components/NavList";
import PopularCategories from "../components/PopularCategories";


const categories = [
  { to: "/sortiment/produkter", textContent: "Visa alla" },
  { to: "/sortiment/produkter", textContent: "Nyheter" },
  { to: "/produkter", textContent: "Bästsäljare" },
  { to: "/produkter", textContent: "Kollektioner" },
  { to: "/produkter", textContent: "Kläder" },
  { to: "/produkter", textContent: "Accessoarer" },
  { to: "/produkter", textContent: "Huvudbonader" },
  { to: "/produkter", textContent: "Barnkläder" },
  { to: "/produkter", textContent: "Gåvor" },
  { to: "/produkter", textContent: "Tjänster" },
];


export default function Sortiment() {
  const categorylist = [{
    img: "/img/informative/Creator 2.0_Heather Haze_Duo_Front_Main_0.jpg",
    alt: "Cool tröja",
    label: "T-shirt",

  },
  {
    img: "/img/informative/Liner_Desert Dust_Duo_Front_Main_0.jpg",
    alt: "Västar",
    label: "Västar",

  },{
    img: "/img/informative/Trekker_Desert Dust_Duo_Front_Main_0.jpg",
    alt: "Jackor",
    label: "Jackor",

  },{
    img: "/img/informative/Cruiser 2.0_Heather Haze_Duo_Front_Main_0.jpg",
    alt: "Huvtröjor",
    label: "Huvtröjor",

  }]



  
  return (
    <div className="container" style={{ marginBlockStart: "10.8rem" }}>
     
      
      <NavList links={categories} className="categories" />

      <div className="nav-heading">
<h1 className="section-heading heading-3">Populära Kategori</h1>
</div>
      <PopularCategories  categoryList={categorylist}/>

   
    </div>
  );
}
