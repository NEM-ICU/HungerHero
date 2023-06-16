import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import HistoryRecord from "../components/history-record/history-record.component";
import "./donationHistory.styles.css";

const DonationHistory = () => {
    const [foods, setFoods] = useState([]);
    const [cookie, _] = useCookies(["access_token"]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };

    useEffect(() => {
        const fetchAllFoods = async () => {
            try {
                const res = await axios.get(
                    "/api/donations",
                    config
                );
                console.log(res.data);
                setFoods(res.data.donations);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllFoods();
    }, []);
    console.log(foods);
    return (
        <>
            <div className="donation-history">
                <h1 className="dh_header"> Donation History </h1>
                {foods.map((food) => (
                    <HistoryRecord
                        key={food.food_id}
                        food_id={food.food_id}
                        food_name={food.food_name}
                        quantity={food.quantity}
                        donor_name={food.donor_name}
                        location={food.location}
                        donor_mobile={food.donor_phone_no}
                        address={food.address}
                        src={food.food_img}
                        state={food.stage}
                        requested_seeker_id={food.requested_seeker_id}
                    />
                ))}
            </div>
        </>
    );
};

export default DonationHistory;
