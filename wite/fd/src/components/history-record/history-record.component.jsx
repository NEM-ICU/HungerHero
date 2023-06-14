import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import axios from "axios";
import "./history-record.styles.css";

const HistoryRecord = ({
    food_name,
    quantity,
    donor_name,
    location,
    donor_mobile,
    food_id,
    address,
    state,
    src,
    requested_seeker_id,
}) => {
    const [cookie, _] = useCookies(["access_token"]);
    const [seeker, setSeeker] = useState([]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };
    const deleteFood = async () => {
        try {
            const res = await axios.delete(
                "http://localhost:8000/api/donations/delete-donation?food_id=" +
                    food_id,
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
                console.log(res);

                setSeeker(res.data.user[0]);
            } catch (err) {
                console.log(err);
            }
        };
        if (requested_seeker_id) fetchSeeker();
    }, []);

    return (
        <div className="hh__wrapper">
            <div className="hr__hh__card">
                <img src={src} alt="food item" />
                <div className="hh__btn__box">
                    <div className="hh__detail-box">
                        <h1>{food_name}</h1>
                        <h2>Quantity : {quantity}</h2>
                        <h3>Donor Name : {donor_name}</h3>
                        <h3>Location : {location}</h3>
                        <h3>Donor Mobile : {donor_mobile}</h3>
                        <h3>Donor Address : {address}</h3>

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

                    <button className="hh__reject__btn" onClick={deleteFood}>
                        {state ? "Delete" : "Deliver"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HistoryRecord;
