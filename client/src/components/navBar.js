import React from "react";
import logo from './Rt.png'
// import {Button, Container, Image, Nav, Navbar, NavLink} from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">

                <img src={logo} /* alt="Logo" */ width="100" height="40"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Покупатель</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/sales">Продавец</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Информация</a>
                </li>
                <li class="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;