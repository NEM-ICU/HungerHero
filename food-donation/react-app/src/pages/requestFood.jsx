import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import FoodCard from "../components/food-card/food-card.component";
import Heading from "../components/heading/heading.component";
import "./requestFood.styles.css";

const Donations = () => {
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
                    "http://localhost:8000/api/donations/filter?stage=approved",
                    config
                );
                console.log(res.data);
                setDonations(res.data.foods);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllFoods();
    }, []);
    console.log(donations);
    return (
        <div className="donations__wrapper">
            <h1 className="heading__title">Request a Food</h1>
            <div className="donations">
                {donations.map((food) => {
                    return (
                        <FoodCard
                            key={food.food_id}
                            food_id={food.food_id}
                            src={food.food_img}
                            name={food.food_name}
                            quantity={food.quantity}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Donations;
