import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./../assets/logo.png";
import "./navbar.styles.css";

const Navigation = () => {
    const [mobile, setMobile] = useState(false);
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("role");
    };

    return (
        <>
            <nav className="navbar">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <ul
                    className={mobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setMobile(false)}
                >
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    {window.localStorage.getItem("role") === "donor" ? (
                        <>
                            <Link to="/create-donation">
                                <li>Donate</li>
                            </Link>
                            <Link to="/donor-donation-history">
                                <li>Donation History</li>
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}
                    {window.localStorage.getItem("role") === "admin" ? (
                        <>
                            <Link to="/admin-panel">
                                <li>Approve Donations</li>
                            </Link>
                            <Link to="/donation-history">
                                <li>Donation History</li>
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}

                    {window.localStorage.getItem("role") === "rider" ? (
                        <>
                            <Link to="/delivery">
                                <li>Delivery</li>
                            </Link>
                            <Link to="/confirm-delivery">
                                <li>Order Confirmation</li>
                            </Link>
                        </>
                    ) : (
                        <></>
                    )}

                    {window.localStorage.getItem("role") === "help_seeker" ? (
                        <Link to="/donations">
                            <li>Donations</li>
                        </Link>
                    ) : (
                        <></>
                    )}

                    {cookies.access_token ? (
                        <Link to="/" onClick={logout}>
                            <li>logout</li>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <li>login/register</li>
                        </Link>
                    )}
                </ul>
                <button
                    className="mobile-menu-icon hide"
                    onClick={() => setMobile(!mobile)}
                >
                    {mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;
