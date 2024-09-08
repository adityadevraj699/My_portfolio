/* eslint-disable no-unused-vars */
/* src/components/SkillSection.jsx */
import React, { useEffect } from 'react';
import '../assets/CSS/Skills.css'; // Ensure to create this CSS file for styling
import ScrollReveal from 'scrollreveal';

const skills = [
    { name: 'JavaScript', percentage: '90%' },
    { name: 'React', percentage: '70%' },
    { name: 'Python', percentage: '80%' },
    { name: 'Java', percentage: '90%' },
    { name: 'c/c++', percentage: '95%' },
    { name: 'Git', percentage: '85%' }
];

const Skills = () => {
    useEffect(() => {
        ScrollReveal().reveal('.skill', {
            duration: 2000,
            origin: 'left',
            distance: '50px',
            opacity: 0,
            easing: 'ease-in-out',
            reset: true,
            beforeReveal: function (el) {
                let skillPercentage = el.querySelector('.skill-percentage');
                let percentage = skillPercentage.getAttribute('data-percentage');
                skillPercentage.style.width = percentage;
            },
            beforeReset: function (el) {
                let skillPercentage = el.querySelector('.skill-percentage');
                skillPercentage.style.width = '0';
            }
        });
    }, []);

    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <p>{skill.name}</p>
                        <div className="skill-bar">
                            <div
                                className="skill-percentage"
                                data-percentage={skill.percentage}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
