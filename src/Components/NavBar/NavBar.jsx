import CartWidget from "../CartWidget/CartWidget";

function NavBar (props)
{
  
    if (props.fut == true) {
      return (
<nav className= "NavBarClase">
<a href="#">Devoluciones</a>
<a href="#">FAQ</a>
<a href="#">Contacto</a>
</nav>
  )
} else {
  return (
    <nav className= "NavBarClase">
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Contacto</a>
    <CartWidget/>
    </nav>
      )
}
}

export default NavBar;
