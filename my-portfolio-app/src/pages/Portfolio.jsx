/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../assets/CSS/Portfolio.css';

// Import images directly
import resumeBuilderImage from '../assets/images/resume-builder.png';
import webDesign1Image from '../assets/images/Personal-Portfolio-img.jpg';
import webDesign2Image from '../assets/images/E-commerce-react.jpg';
import webDesign3Image from '../assets/images/portfolio3.avif';
import webDesign4Image from '../assets/images/portfolio4.avif';
import webDesign5Image from '../assets/images/E-commerce.jpg';

const portfolioItems = [
    {
        id: 1,
        title: 'Resume Builder',
        description: 'My 2nd year college project using JavaScript.',
        imageUrl: resumeBuilderImage,
        link: 'https://adityadevraj699.github.io/portfolio-builder/',
        tags: ['JavaScript','Resume Builder', 'frontend Development'],
        
    },
    {
        id: 2,
        title: 'Personal-portfolio',
        description: 'A simple Portfolio design project using HTML, CSS and Javascript.',
        imageUrl: webDesign1Image,
        link: 'https://adityadevraj699.github.io/personal-portfolio/',
        tags: ['JavaScript', 'Web Design','Personal-portfolio', 'frontend Development'],
        
    },
    {
        id: 3,
        title: 'E-commerce-React',
        description: 'Responsive web design with JavaScript and React.',
        imageUrl: webDesign2Image,
        link: '#',
        tags: ['JavaScript', 'React','E-commerce-React','Web Development'],
    
    },
    {
        id: 4,
        title: 'Backend Development 1',
        description: 'Backend development using Python and Django.',
        imageUrl: webDesign3Image,
        link: '#',
        tags: ['Python', 'Django','Backend Development'],

    },
    {
        id: 5,
        title: 'Backend Development 2',
        description: 'A Java Spring Boot project for backend services.',
        imageUrl: webDesign4Image,
        link: '#',
        tags: ['Java', 'Spring Boot', 'Backend Development'],
    },
    {
        id: 6,
        title: 'E-Commerce-Design',
        description: 'A simple E-commerce design project using  javascript.',
        imageUrl: webDesign5Image,
        link: 'https://adityadevraj699.github.io/E-Commerce-Website/',
        tags: ['Html', 'CSS', 'JavaStript','E-Commerce-Design', 'frontend Development'],
    },
    // Add more portfolio items as needed
];

const Portfolio = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter portfolio items based on the search term
    const filteredItems = portfolioItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        //item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading">Latest <span>Projects</span></h2>
            
            {/* Search Bar */}
            <input 
                type="text"
                className="search-bar"
                placeholder="Search projects by name, tags, or categories (e.g., JavaScript, Web Development, Django, etc.)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="portfolio-container">
                {filteredItems.map(item => (
                    <div key={item.id} className="portfolio-box">
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="portfolio-layer">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <i className="bx bx-link-external"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
