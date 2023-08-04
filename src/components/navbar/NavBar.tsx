import './NavBar.scss';
import { Link } from "react-router-dom";

type Props = {
  isMenuActive?: boolean;
}

const NavBar = ({ isMenuActive }: Props) => { 
  return (
      <nav className={`nav-bar ${isMenuActive? "active": ""}`}>
        <ul className="nav-bar__nav-list">
          <li className="nav-bar__nav-item">
            <Link className="nav-bar__nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-bar__nav-item">
            <Link className="nav-bar__nav-link" to="/alta">Alta</Link>
          </li>
          <li className="nav-bar__nav-item">
            <Link className="nav-bar__nav-link" to="/contacto">Contacto</Link>
          </li>
          <li className="nav-bar__nav-item">
            <Link className="nav-bar__nav-link" to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default NavBar;