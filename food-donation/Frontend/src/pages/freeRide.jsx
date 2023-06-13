import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import "./adminPanel.styles.css";
import AcceptDelivery from "../components/accept-delivery/accept-delivery.component";

const FreeRide = () => {
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
                    "http://localhost:8000/api/donations/filter?stage=accepted",
                    config
                );
                setDonations(res.data.foods);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllFoods();
    }, []);

    console.log(donations);
    return (
        <div className="donations__wrapper">
            <h1 className="heading__title">Food to Supply</h1>
            <div className="donations__delivery">
                {donations.map((food) => {
                    return (
                        <AcceptDelivery
                            key={food.food_id}
                            src={food.food_img}
                            food_id={food.food_id}
                            food_name={food.food_name}
                            quantity={food.quantity}
                            donor_name={food.donor_name}
                            donor_mobile={food.donor_phone_no}
                            address={food.address}
                            location={food.location}
                            stage={food.stage}
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

export default FreeRide;
