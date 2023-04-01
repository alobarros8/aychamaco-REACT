import "./assets/logochamaco.png";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="assets/logochamaco" alt="" />
        <ul>
          <li>Incio</li>
          <li className="active_item">Hamburguesas</li>
          <li>Contacto</li>
          <li>Sobre nosotros</li>
        </ul>
        <button>
          <i class="bi bi-cart-plus"></i>
        </button>
      </nav>
    </header>
  );
}
export default Header;
