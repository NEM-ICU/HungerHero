import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../Form/form.component";

const Register = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [role, setRole] = useState("help_seeker");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [vehicleType, setVehicleType] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/users/register",
                {
                    username,
                    name,
                    email,
                    password,
                    role,
                    location,
                    address,
                    v_type: vehicleType,
                    id_num: idNumber,
                    m_no: phoneNo,
                }
            );


            if (response.data) {
                alert(response.data.message);
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <RegisterForm
            username={username}
            setUsername={setUsername}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            role={role}
            vehicleType={vehicleType}
            setVehicleType={setVehicleType}
            setRole={setRole}
            address={address}
            setAddress={setAddress}
            idNumber={idNumber}
            setIdNumber={setIdNumber}
            location={location}
            setLocation={setLocation}
            phoneNo={phoneNo}
            setPhoneNo={setPhoneNo}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
};

export default Register;
