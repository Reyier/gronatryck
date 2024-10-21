import NavList from "../components/NavList";

const categories = [
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
  return (
    <div className="container" style={{ marginBlockStart: "10.8rem" }}>
      {/*  Lägg breadcrumb här */}
      <h1 className="heading-1">Sortiment</h1>
      <NavList links={categories} className="categories" />

      {/* Populära kategorier här */}
    </div>
  );
}
