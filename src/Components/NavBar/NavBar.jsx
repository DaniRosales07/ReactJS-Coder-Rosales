import CartWidget from "../CartWidget/CartWidget";

function NavBar (props) {
  return (
    <nav className=" menu-escritorio navbar bg-primary" data-bs-theme="dark">
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" title="Inicio">Inicio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/section6" title="Diseños">FormularioCV</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="./pages/contactos.html" title="Contacto">Contacto</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" title="Compras"> <CartWidget/> </a>
        </li>
    </ul>
</nav>
  )
}

export default NavBar;



