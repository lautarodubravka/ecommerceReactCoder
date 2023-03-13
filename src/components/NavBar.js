import React from "react";
import CartWidget from './CartWidget';
import "materialize-css/dist/css/materialize.min.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">Acá va un logo</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html">Comidas preparadas</a></li>
          <li><a href="badges.html">Bebidas naturales</a></li>
          <li><a href="collapsible.html">Snacks</a></li>
          <li><a href="mobile.html">Contacto</a></li>
        </ul>
      </div>
      <ul className="sidenav" id="mobile-demo">
      <li><a href="sass.html">Comidas preparadas</a></li>
          <li><a href="badges.html">Bebidas naturales</a></li>
          <li><a href="collapsible.html">Snacks</a></li>
          <li><a href="mobile.html">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

