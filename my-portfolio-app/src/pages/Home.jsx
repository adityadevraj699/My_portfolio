/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import homeImage from '../assets/images/Home.jpg'; // Replace with your image path
import '../assets/CSS/Home.css'; // Import the CSS file for styling

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const phrases = [" Frontend Developer", "Coder", "Designer","Content Creator","Blogger","Freelancer"];

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[loopNum % phrases.length];
            setText(isDeleting
                ? currentPhrase.substring(0, text.length - 1)
                : currentPhrase.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, Its Me</h3>
                <h1>ADITYA KUMAR</h1>
                <h3>And I am a <span className="typing">{text}</span></h3>
                <p id='paragraph'>I am Aditya Kumar from Bihar, Patna. I did my intermediate from my own city. At present, I am pursuing my course B.Tech specializing in Computer Science and Engineering at Meerut Institute of Technology.</p>
                <div className="social-media">
                <a href="https://www.linkedin.com/in/aditya-kumar-9605b9240" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/adityadevraj699" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://github.com/adityadevraj699" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                </a>
                <a href="https://wa.me/9110169560" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-whatsapp"></i>
                </a>
                </div>

                <a href="/assets/images/ADITYA Resume.pdf" download="ADITYA Resume.pdf" className="btn">Resume</a>
            </div>
            <div className="home-img">
                <img src={homeImage} alt="Aditya Kumar" />
            </div>
        </section>
    );
};

export default Home;
