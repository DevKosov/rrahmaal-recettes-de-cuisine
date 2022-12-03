import React from "react";
import {NavLink, Outlet} from "react-router-dom";


const Menu = () => {

    let activeStyle = {
        textDecoration: "underline",
    };


    return (
    <div>
        <nav className="navbar navbar-expand navbar-light bg-light">

            <div className="collapse navbar-collapse p-3" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-center w-100">
                    <li className="nav-item active">
                        <NavLink
                            className={'nav-link p-2'}
                            to="/"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Recettes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={'nav-link p-2'}
                            to="/blog"
                            style={({ isActive }) => isActive ? activeStyle : undefined}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </div>
  );
};

export default Menu;
