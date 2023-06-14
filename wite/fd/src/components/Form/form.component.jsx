import "./form.styles.css";

const RegisterForm = ({
    username,
    setUsername,
    name,
    email,
    setEmail,
    location,
    setLocation,
    phoneNo,
    setPhoneNo,
    role,
    setRole,
    address,
    setAddress,
    vehicleType,
    setVehicleType,
    idNumber,
    setIdNumber,
    setName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    label,
    onSubmit,
}) => {
    return (
        <div className="wrapper">
            <form className="bottomBox" onSubmit={onSubmit}>
                <h1>{label}</h1>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        required="true"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="username"
                        required="true"
                        placeholder="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        required="true"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="location"
                        placeholder="Location/District"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="phoneNo"
                        placeholder="Phone Number"
                        value={phoneNo}
                        onChange={(event) => setPhoneNo(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-group-select"
                        type="text"
                        id="role"
                        placeholder="Role"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                    >
                        <option value="help_seeker">
                            USER ROLE ( help_seeker )
                        </option>
                        <option value="donor">USER ROLE ( donor )</option>
                        <option value="rider">USER ROLE ( rider )</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="vehicleType"
                        placeholder="Vehicle Type"
                        value={vehicleType}
                        onChange={(event) => setVehicleType(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        id="idNumber"
                        placeholder="Id Number"
                        value={idNumber}
                        onChange={(event) => setIdNumber(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        required="true"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="confirmPassword"
                        required="true"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassword(event.target.value)
                        }
                    />
                </div>
                <button className="registerButton" type="submit">
                    {label}
                </button>
            </form>
        </div>
    );
};

export { RegisterForm as RegisterForm };
