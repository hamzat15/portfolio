import React from 'react';
import "./style.css";
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header';
import Back from '../../style/Back';
import Nav from '../../components/navigation/Nav';



const Home = () => { 

    
    return (
        <div>
            <Header />
            <Nav />
            <div className='contain'>
                <h3>Bienvenue sur mon portfolio en ligne</h3>
                <div className='paragraphe'>
                    <p></p>
                </div>
            </div>
            <Footer />
            <Back />
        </div>
    );
};

export default Home;