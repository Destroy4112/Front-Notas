import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars"></i></NavLink>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <NavLink className="nav-link" data-toggle="dropdown" >
                        <i className="far fa-user-circle text-big">&nbsp;&nbsp;Juan</i>&nbsp;<i className="fas fa-caret-down"></i>
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <div className="dropdown-divider"></div>
                        <h6 className="dropdown-item">
                            <span className="right badge badge-success float-right">Admin</span>
                        </h6>
                        <NavLink to="/" className="a dropdown-item">
                            <i className="fas fa-sign-out-alt"></i>&nbsp; Salir
                        </NavLink>
                    </div>
                </li>
            </ul>
        </nav >
    )
}
export { Nav }