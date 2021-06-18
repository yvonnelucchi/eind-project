import React from "react";
import { NavLink } from "react-router-dom";
import artOnline from "../assets/logo_small.png";

function TopMenu() {
    return (
        <>
            <nav>
                <div className="nav-container">

                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link"><img src={artOnline} alt=""/>Homepage</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile" exact activeClassName="active-link">Profile</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default TopMenu;