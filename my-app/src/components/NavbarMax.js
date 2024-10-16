import React, {useState} from "react";
import { Link } from "react-router-dom";
import { LuUser2, LuShoppingCart, LuSearch, LuMenu   } from "react-icons/lu";
import "../styles/maxcss.css"


function Header(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        console.log("hi");
        setIsOpen(!isOpen);
    }
return <header className="page-navigation">
      <Link to="/" className="logo"><img src="/img/decorative/logotyp_horizontell.png" alt="the brand logotype of Görna Tryck"/></Link>
    <NavbarMax isShowing={isOpen}/>
    <ul className="action-nav">
        <li><button><LuShoppingCart/></button></li>
        <li><button><LuUser2/></button></li>
        <li><button><LuSearch/></button></li>
        <li className="mobile-toggle"><button onClick={toggleMenu}><LuMenu/></button></li>
    </ul>
    </header>

}

function NavbarMax(props){
    return(
        
    <nav>
        <ul className={`max-main-nav ${props.isShowing ? 'active' : ''}`}>
            <li><Link to="/sortiment">Sortiment</Link></li>
            <li><Link to="/tjanster">Tjänster</Link></li>
            <li><Link to="/stanley-stella">Stanley Stella</Link></li>
            <li><Link to="/hallbara-material">Hållbara Material</Link></li>
            <li><Link to="/om-grona-tryck">Om Gröna Tryck</Link></li>
            <li><Link to="/for-aterforsaljare">För Återförsäljare</Link></li>
            <li><Link to="/mina-sidor">Mina Sidor</Link></li>
        </ul>
    </nav>

    )

}

export default Header;