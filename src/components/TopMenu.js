import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import artOnline from '../assets/logo_small.png';
import './TopMenu.css';

function TopMenu({isAuth, toggleAuth}) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
            <nav>
                <div className="nav-container">
                    <ul>
                        <li>
                            <NavLink to="/"><img src={artOnline} alt=""/>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up">Sign up</NavLink>
                        </li>
                        {isAuth === true
                        ? <>

                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                            <li>
                                <button type="button" className="uitloggen" onClick={signOut}>
                                    Uitloggen
                                </button>
                            </li>
                            </>
                            :
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>}


                        <div className="dropdown">
                            <button type="button" className="dropbtn">+
                            </button>
                        </div>


                    </ul>
                </div>
            </nav>
    );
}

export default TopMenu;