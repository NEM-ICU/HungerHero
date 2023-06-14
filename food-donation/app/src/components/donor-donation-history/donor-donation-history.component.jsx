import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import axios from "axios";
import "./donor-donation-history.styles.css";

const DonorDonationHistoryRecord = ({
    food_name,
    quantity,
    donor_name,
    requested_seeker_id,
    state,
    src,
}) => {
    const [seeker, setSeeker] = useState([]);
    const [cookie, _] = useCookies(["access_token"]);

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
        if (requested_seeker_id) fetchSeeker();
    }, []);
    console.log(seeker);

    return (
        <div className="hh__wrapper">
            <div className="hh__card">
                <img src={src} alt="food item" />
                <div className="btn__box">
                    <div className="hh__detail-box">
                        <h1>{food_name}</h1>
                        <h2>Quantity : {quantity}</h2>
                        <h3>Donor Name : {donor_name}</h3>
                        {requested_seeker_id ? (
                            <h3>Help Seeker Name : {seeker.name}</h3>
                        ) : (
                            <></>
                        )}
                        {requested_seeker_id ? (
                            <h3>Help Seeker Address : {seeker.address}</h3>
                        ) : (
                            <></>
                        )}
                        {requested_seeker_id ? (
                            <h3>Help Seeker Mobile : {seeker.m_no}</h3>
                        ) : (
                            <></>
                        )}
                        {requested_seeker_id ? (
                            <h3>Help Seeker Location : {seeker.location}</h3>
                        ) : (
                            <></>
                        )}
                        <h3>Donation Status : {state}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorDonationHistoryRecord;
