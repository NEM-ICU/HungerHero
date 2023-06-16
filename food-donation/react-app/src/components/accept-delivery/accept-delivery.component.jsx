import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

import axios from "axios";
import "./accept-delivery.styles.css";

const AcceptDelivery = ({
    food_name,
    quantity,
    donor_name,
    location,
    donor_mobile,
    requested_seeker_id,
    food_id,
    address,
    stage,
    src,
}) => {
    const [seeker, setSeeker] = useState([]);
    const [cookie, _] = useCookies(["access_token"]);

    const config = {
        headers: {
            Authorization: "Bearer " + cookie.access_token,
        },
    };

    const deliverFood = async () => {
        try {
            const res = await axios.patch(
                "/api/donations/",
                {
                    food_id,
                    stage: "deliver accepted",
                },
                config
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
        try {
            const res = await axios.patch(
                "/api/donations/accept-delivery",
                {
                    food_id,
                },
                config
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
        try {
            const res = await axios.patch(
                "/api/donations/update-rider-name",
                {
                    food_id,
                    name: window.localStorage.getItem("name"),
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
                    "/api/users/get-user?id=" +
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
    console.log(seeker);

    return (
        <div className="hh__wrapper">
            <div className="ad__card">
                <img src={src} alt="food item" />
                <div className="btn__box">
                    <div className="ad__detail-box">
                        <h1>{food_name}</h1>
                        <h2>Quantity : {quantity}</h2>
                        <h3>Donor Name : {donor_name}</h3>
                        <h3>Donor Location : {location}</h3>
                        <h3>Donor Address : {address}</h3>
                        <h3>Donor Mobile : {donor_mobile}</h3>
                        <h3>Help Seeker Address : {seeker.address}</h3>
                        <h3>Help Seeker Mobile : {seeker.m_no}</h3>
                        <h3>Help Seeker Location : {seeker.location}</h3>
                        <h3>Donation Status : {stage}</h3>
                    </div>

                    <button className="hh__reject__btn" onClick={deliverFood}>
                        Deliver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcceptDelivery;
