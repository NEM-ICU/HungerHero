import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import DonorDonationHistoryRecord from "../components/donor-donation-history/donor-donation-history.component";
import "./donorDonationHistory.styles.css";

const DonorDonationHistory = () => {
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
                    "http://localhost:8000/api/donations/donor-donations",
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
    return (
        <>
            <div className="donation-history">
                <h1 className="dh_header"> Donation History </h1>
                {foods.map((food) => (
                    <DonorDonationHistoryRecord
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

export default DonorDonationHistory;
