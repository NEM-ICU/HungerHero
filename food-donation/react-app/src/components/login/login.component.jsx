import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
// import { LoginForm } from "../Form/form.component";
import "./login.styles.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "/api/users/login",
                {
                    email,
                    password,
                }
            );
            if (response.data.token) {
                setCookies("access_token", response.data.token, {
                    path: "/",
                    maxAge: 31536000,
                });

                window.localStorage.setItem("role", response.data.role);
                window.localStorage.setItem("name", response.data.name);

                if (response.data.role === "admin") {
                    navigate("/admin-panel");
                } else if (response.data.role === "donor") {
                    navigate("/donor-donation-history");
                } else if (response.data.role === "help_seeker") {
                    navigate("/donations");
                } else navigate("/delivery");
            } else {
                setEmail("");
                setPassword("");
                alert(response.data.message);
            }
        } catch (err) {
            setEmail("");
            setPassword("");
            alert(err.response.data.message);
        }
    };

    return (
        <div className="login">
            <div className="wrapper">
                <h1>Login</h1>
                <div className="loginBox">
                    <div className="bottom">
                        <form className="bottomBox" onSubmit={onSubmit}>
                            <input
                                type="text"
                                id="email"
                                className="loginInput"
                                placeholder="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                required
                            />
                            <input
                                type="password"
                                id="password"
                                className="loginInput"
                                placeholder="Password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                required
                            />

                            <button type="submit" className="loginButton">
                                Sign In
                            </button>
                            <Link to="/register">
                                <button className="loginRegisterButton">
                                    Create a New Account
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
