import React from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./food-card.styles.css";

const FoodCard = ({ name, quantity, src, food_id }) => {
    const [cookie, _] = useCookies(["access_token"]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };

    const acceptFood = async () => {
        try {
            const res = await axios.patch(
                "/api/donations/",
                {
                    food_id,
                    stage: "accepted",
                },
                config
            );
            updateRecord();
        } catch (err) {
            console.log(err);
        }
    };
    const updateRecord = async () => {
        try {
            const res = await axios.patch(
                "/api/donations/update-seeker-id",
                {
                    food_id,
                },
                config
            );
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="card">
            <img src={src} alt="food" />
            <div className="detail-box">
                <h1>{name}</h1>
                <h2>{quantity}</h2>
                <button className="order__btn" onClick={acceptFood}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
