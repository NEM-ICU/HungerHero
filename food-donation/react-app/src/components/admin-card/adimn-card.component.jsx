import React from "react";
import { useCookies } from "react-cookie";

import axios from "axios";
import "./admin-card.styles.css";

const AdminCard = ({ name, quantity, food_id, src }) => {
    const [cookie, _] = useCookies(["access_token"]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };
    const deleteFood = async () => {
        try {
            const res = await axios.delete(
                "/api/donations/delete-donation?food_id=" +
                    food_id,
                config
            );
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };
    const approveFood = async () => {
        try {
            const res = await axios.patch(
                "/api/donations/",
                {
                    food_id,
                    stage: "approved",
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
            <img src={src} alt="food item" />
            <div className="detail-box">
                <h1>{name}</h1>
                <h2>{quantity}</h2>
                <button className="reject__btn" onClick={deleteFood}>
                    Reject
                </button>
                <button className="order__btn" onClick={approveFood}>
                    Approve
                </button>
            </div>
        </div>
    );
};

export default AdminCard;
