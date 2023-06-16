import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import "./confirmDelivery.styles.css";
import ConfirmDeliveryCard from "../components/confirm-delivery-card/confirm-delivery.component";

const ConfirmDelivery = () => {
    const [donations, setDonations] = useState([]);
    const [cookie, _] = useCookies(["access_token"]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + cookie.access_token,
            },
        };
        const fetchAllFoods = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/donations/delivered-items",
                    config
                );
                console.log(res);
                setDonations(res.data.donations);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllFoods();
    }, []);
    return (
        <div className="donations__wrapper">
            <h1 className="heading__title">Submitted Foods</h1>
            <div className="donations">
                {donations.map((food) => {
                    return (
                        <ConfirmDeliveryCard
                            key={food.food_id}
                            src={food.food_img}
                            food_id={food.food_id}
                            name={food.food_name}
                            quantity={food.quantity}
                            requested_seeker_id={food.requested_seeker_id}
                        />
                    );
                })}
                {donations.length === 0 ? (
                    <h1 className="heading__title">No Records..</h1>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default ConfirmDelivery;
