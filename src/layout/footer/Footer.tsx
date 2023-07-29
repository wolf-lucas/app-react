import './Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
            <div className="logo">
              <i className="fa-solid fa-dice-d20"></i>
              <span className="logo__name"> Juguetería Cósmica</span>
            </div>
            <div className="footer-listados__container">
              <div className="footer-listados__col">
                <ul className="list-unstyled">
                  <li><Link to="">Productos</Link></li>
                  <li><Link to="">Beneficio</Link></li>
                  <li><Link to="">Ofertas</Link></li>
                  <li><Link to="">Equipo</Link></li>
                </ul>
              </div>
              <div className="footer-listados__col">
                <ul className="list-unstyled">
                  <li><Link to="">Soporte</Link></li>
                  <li><Link to="">Terminos & Condiciones</Link></li>
                  <li><Link to="">Sobre Nosotros</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-social__container">
              <ul className="nav-bar__nav-list">
                <li className="nav-bar__nav-item"><Link to="" className="nav-bar__nav-link idx-0"><i className="fa-brands fa-facebook"></i></Link></li>
                <li className="nav-bar__nav-item"><Link to="" className="nav-bar__nav-link"><i className="fa-brands fa-twitter"></i></Link></li>
                <li className="nav-bar__nav-item"><Link to="" className="nav-bar__nav-link"><i className="fa-brands fa-github"></i></Link></li>
                <li className="nav-bar__nav-item"><Link to="" className="nav-bar__nav-link"><i className="fa-brands fa-instagram"></i></Link></li>
              </ul>
            </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;
