import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminCard from "../components/admin-card/adimn-card.component";
import { useCookies } from "react-cookie";

import "./adminPanel.styles.css";

const AdminPanel = () => {
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
                    "/api/donations/filter?stage=Pending",
                    config
                );
                setDonations(res.data.foods);
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
                        <AdminCard
                            key={food.food_id}
                            src={food.food_img}
                            food_id={food.food_id}
                            name={food.food_name}
                            quantity={food.quantity}
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

export default AdminPanel;
