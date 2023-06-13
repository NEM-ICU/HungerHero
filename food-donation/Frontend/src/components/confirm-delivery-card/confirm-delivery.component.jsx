import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

import axios from "axios";
import "./confirm-delivery.styles.css";

const ConfirmDeliveryCard = ({
    name,
    quantity,
    food_id,
    requested_seeker_id,
    src,
}) => {
    const [seeker, setSeeker] = useState([]);
    const [cookie, _] = useCookies(["access_token"]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };

    // delivered

    const completeOrder = async () => {
        try {
            const res = await axios.patch(
                "http://localhost:8000/api/donations/",
                {
                    food_id,
                    stage: "completed",
                },
                config
            );
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + cookie.access_token,
            },
        };
        const fetchSeeker = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/users/get-user?id=" +
                        requested_seeker_id,
                    config
                );
                setSeeker(res.data.user[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchSeeker();
    }, []);

    return (
        <div className="confirm-delivery-card">
            <img src={src} alt="food item" />
            <div className="detail-box">
                <h1>{name}</h1>
                <h2>{quantity}</h2>
                <div className="seeker__name">
                    <h2>Name : </h2> <p>{seeker.name}</p>
                </div>
                <div className="seeker__address">
                    <h2>Address : </h2>
                    <p>No 181/20 jayamaga sewana maharekma,mawala,wadduwa</p>
                </div>
                <button className="reject__btn" onClick={completeOrder}>
                    Confirm Delivery
                </button>
            </div>
        </div>
    );
};

export default ConfirmDeliveryCard;
