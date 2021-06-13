import React from "react";
import "./footer.css";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (

        <div class="footer-basic" bg="dark">
            
            <footer>
                <div class="social"><SocialIcon url="https://twitter.com/" /><SocialIcon url="https://facebook.com/" /><SocialIcon url="https://instagram.com/" /><SocialIcon url="https://github.com/" /><SocialIcon url="https://linkedin.com/in/hamzat-siby-6a691208" /></div>
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                </ul>
                <p class="copyright">Hamzat Siby © 2021</p>
            </footer>
        </div>
    );
};
export default Footer;