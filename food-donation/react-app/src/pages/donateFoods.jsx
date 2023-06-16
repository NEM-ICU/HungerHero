import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./donateFoods.styles.css";

const DonateFoods = () => {
    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [cookie, _] = useCookies(["access_token"]);
    const role = window.localStorage.getItem("role");

    const onSubmit = async (event) => {
        event.preventDefault();
        const config = {
            headers: {
                Authorization: "Bearer " + cookie.access_token,
            },
        };
        const data = {
            food_name: foodName,
            quantity: quantity,
            donor_name: window.localStorage.getItem("name"),
            location: location,
            donor_phone_no: phoneNo,
            food_img: imageUrl,
            address: address,
            stage: "pending",
        };
        try {
            const response = await axios.post(
                "/api/donations",
                data,
                config
            );
            setFoodName("");
            setQuantity("");
            setLocation("");
            setPhoneNo("");
            setImageUrl("");
            setAddress("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="donation__grid__wrapper">
            <div className="donations__container">
                {role === "donor" || "admin" ? (
                    <form className="donation__form" onSubmit={onSubmit}>
                        <h1>Donate</h1>
                        <h5>Food Name *</h5>
                        <input
                            type="text"
                            id="food_name"
                            className="donate__input"
                            placeholder="Food Name"
                            value={foodName}
                            onChange={(event) =>
                                setFoodName(event.target.value)
                            }
                            required
                        />

                        <h5>Quantity *</h5>
                        <input
                            type="text"
                            id="quantity"
                            className="donate__input"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(event) =>
                                setQuantity(event.target.value)
                            }
                            required
                        />

                        <h5>Address *</h5>
                        <input
                            type="text"
                            id="address"
                            className="donate__input"
                            placeholder="Address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />

                        <h5>Location *</h5>
                        <input
                            type="text"
                            id="location"
                            className="donate__input"
                            placeholder="Location"
                            value={location}
                            onChange={(event) =>
                                setLocation(event.target.value)
                            }
                        />

                        <h5>Phone Number *</h5>
                        <input
                            type="text"
                            id="phoneNo"
                            className="donate__input"
                            placeholder="Mobile Number"
                            value={phoneNo}
                            onChange={(event) => setPhoneNo(event.target.value)}
                            required
                        />

                        <h5>Image URL</h5>
                        <input
                            type="text"
                            id="imageUrl"
                            className="donate__input"
                            placeholder="Image URL"
                            value={imageUrl}
                            onChange={(event) =>
                                setImageUrl(event.target.value)
                            }
                            required
                        />
                        <div className="btn__wrapper">
                            <button type="submit" className="create__btn">
                                Create
                            </button>
                        </div>
                    </form>
                ) : (
                    <h1>Invalid User</h1>
                )}
            </div>
        </div>
    );
};

export default DonateFoods;
