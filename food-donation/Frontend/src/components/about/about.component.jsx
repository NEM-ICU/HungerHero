import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImg from "./../../assets/children.jpg";
import "./about.styles.css";

const About = () => {
    const navigate = useNavigate();
    
    const navigateTo = () => {
        navigate("register")
    }
    return (
        <section className="about">
            <img className="about-img" src={aboutImg} alt="about" />
            <div className="about-content">
                <h1>Food Donation for Orphanage</h1>
                <p>
                    Welcome to our website dedicated to helping orphanages in
                    Sri Lanka. We believe that every individuals deserves a
                    nutritious meal, and with your help, we can make sure this
                    happens. Browse the information below and find out how you
                    can donate today and make a difference!
                </p>
                <div className="action-group">
                    <h3>Become a </h3>
                    <div className="button-group">
                        <button onClick={navigateTo}>Donor</button>
                        <button onClick={navigateTo}>Volunteer</button>
                        <button onClick={navigateTo}>Help Seeker</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
