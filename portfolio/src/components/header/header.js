import React from 'react';
import "./style.css"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <h1>hamzat siby</h1>
            <div className='option'>
                <ul>
                    <NavLink to="/" ><li>Parcours</li></NavLink>
                    <NavLink to="/" ><li>Project</li></NavLink>
                    <NavLink to="/" ><li>Contact</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;