import React from "react";
import bannerImg from "./../../assets/banner5.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./hero.styles.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        const role = window.localStorage.getItem("role");
        if (role === 'donor') {
            navigate('create-donation')
        }else if(role == undefined){
            navigate('register')
        } else {
            alert('You are not allowed to donate!')
        }
    }
    return (
        <header>
            <div className="header-content">
                <div className="content-main">
                    <h1>Together, let’s end hunger and reduce food waste. </h1>
                    <p>
                        Donate now and make a difference in the lives of those
                        in need!
                    </p>
                    <button onClick={navigateTo} >
                        {" "}
                        Donate Food <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <img className="header-img" src={bannerImg} alt="banner" />
        </header>
    );
};

export default Hero;
