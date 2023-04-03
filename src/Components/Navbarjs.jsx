import "./navbarjs.css";
import CartWidget from "./CartWidget";
function Navbarjs() {
  return (
    <header className="header">
      <h1>AyChamaco!</h1>
      <nav className="navbar">
        <ul>
          <li>Incio</li>
          <li className="active_item">Hamburguesas</li>
          <li>Contacto</li>
          <li>Sobre nosotros</li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
export default Navbarjs;
