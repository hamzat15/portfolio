import React from 'react';
import "./info.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from 'react-dom';


const About = () => {
    return (
        <div>
            <div className="text-center">

            <svg viewBox="0 0 1350 800">
                <text x="20%" y="20%" fill="transparent" text-anchore="middle">Hamzat Siby</text>
            </svg>
            </div>
            <div className="parcours">

            <h1>PARCOURS</h1>

            <p>Hamzat siby, 21 ans, Développeur web en formation à la Web@cademie By EPITECH depuis <br />
                novembre 2020, j'ai fais une piscine de 3 semaines, ensuite, j'ai commencé ma formation de 2  <br />
                ans en tant que développeur web, pendant cette période je vais accomplire une multitudes de <br />
                projet en différents langages de programation tel que PHP et ses frameworks comme <br />
                Symfony et Laravel, JavaScript et React, en utilsant Github comme plateforme de dêpots, j'ai <br />
                aussi appris a utiliser MySQL et faire des requétes, interagire avec une BDD, <br />
                créé une BDD et ses tables, gérer l'administration d'un site. tout cela en 1 an, au cours de ma deuxiéme année <br />
                je vais être en alternance de 6 a 14 mois pour avoir une expérience professionnel.</p>
            
            <div className="float">

                <a href="hamzatCV.pdf" target="_blank" className="button">VOIR MON CV</a>

            
                <a href="hamzatCV.pdf" download className="button">TELECHARGER MON CV</a>
            </div>
            </div>
        </div>

    );

};



export default About;