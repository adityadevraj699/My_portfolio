/* eslint-disable no-unused-vars */
import React from 'react';
import aboutImage from '../assets/images/about1.png'; // Replace with your image path
import '../assets/CSS/About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-img">
                <img src={aboutImage} alt="aditya_about" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Frontend Developer. !</h3>
                <p>I am a versatile developer skilled in OOP with Java, web development with Python and Django, and DSA using C/C++. As a front-end developer, I excel in HTML5, CSS, and JavaScript, crafting visually engaging and interactive websites. I am passionate about creating efficient, user-friendly digital experiences and continually update my skills to stay current with industry trends. My broad expertise allows me to contribute effectively to both backend and frontend projects..........</p>
                <a href="https://www.linkedin.com/in/aditya-kumar-9605b9240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn">Read More</a>
            </div>
        </section>
    );
};

export default About;
