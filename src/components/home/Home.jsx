import React from 'react';
import "./home.css";
import Me from "../../assets/myself-modified.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Yolanda Moreno</h1>
                <div className="home__education animated-info">
                    <span className="animated-item">FullStack Developer</span>
                    <span className="animated-item">Passionate about coding</span>
                    <span className="animated-item">Building awesome web experiences</span>
                </div>
                <HeaderSocials />
                <a href="#contact" className='btn'>Hire Me</a>
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home