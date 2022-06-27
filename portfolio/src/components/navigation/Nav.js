import React from 'react';
import "./style.css";
import { NavLink } from "react-router-dom"


const Nav = () => {
    return (
        <div>
            <div className='option'>
                <ul>
                <NavLink to="/" ><li>Acceuil</li></NavLink>
                    <NavLink to="/" ><li>Parcours</li></NavLink>
                    <NavLink to="/" ><li>Project</li></NavLink>
                    <NavLink to="/" ><li>Contact</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav;