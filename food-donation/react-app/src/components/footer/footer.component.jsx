import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./footer.styles.css";

const Footer = () => {
    return (
        <footer>
            <div className="social-links">
                <div className="social-icon">
                    <Link className="footer-links">
                        <BsFacebook />
                    </Link>
                    <Link className="footer-links twitter">
                        <AiFillTwitterCircle />
                    </Link>
                    <Link className="footer-links">
                        <AiFillInstagram />
                    </Link>
                    <Link className="footer-links">
                        <BsPinterest />
                    </Link>
                    <Link className="footer-links linkedIn">
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
            <div className="copyright">© 2023 All rights reserved.</div>
        </footer>
    );
};

export default Footer;
