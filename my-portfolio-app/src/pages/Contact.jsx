/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/CSS/Contact.css'; // Ensure this file contains the responsive styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const sendMail = (e) => {
        e.preventDefault();
        const { name, email, phone, subject, message } = formData;

        const serviceID = 'service_m8q92iw';
        const templateID = 'template_lp1lcuk';
        const userID = 'FIa6iYe__1j2XTRJR'; // Use your public key or user ID

        emailjs.send(serviceID, templateID, { name, email, phone, subject, message }, userID)
            .then((res) => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
                alert('Your message was sent successfully!\nThank you for connecting, ADITYA KUMAR.');
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={sendMail}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
