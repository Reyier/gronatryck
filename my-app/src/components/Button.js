import { Link } from "react-router-dom";
import "../styles/button.css";

function Button({ to, className, content }) {
  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
}

export default Button;
