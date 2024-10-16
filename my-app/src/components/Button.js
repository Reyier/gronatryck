import { Link } from "react-router-dom";
import "../styles/button.css"

function Button(props){
    return <Link to={props.to} className={props.className}>{props.content}</Link>
}


export default Button;