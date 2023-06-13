import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

import React from "react";
import Navigation from "./routes/navigation.component";
import Register from "./components/register/register.component";
import Login from "./components/login/login.component";
import Donations from "./pages/requestFood";
import DonateFoods from "./pages/donateFoods";
import DonationHistory from "./pages/donationHistory";
import AdminPanel from "./pages/adminPanel";
import FreeRide from "./pages/freeRide";
import DonorDonationHistory from "./pages/donorDonationHistory";
import ConfirmDelivery from "./pages/confirmDelivery";
import About from "./pages/about";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />

                <Route path="/donations" element={<Donations />} />
                <Route path="/create-donation" element={<DonateFoods />} />
                <Route path="/donation-history" element={<DonationHistory />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
                <Route path="/delivery" element={<FreeRide />} />
                <Route path="/confirm-delivery" element={<ConfirmDelivery />} />
                <Route
                    path="/donor-donation-history"
                    element={<DonorDonationHistory />}
                />
            </Route>
        </Routes>
    );
}

export default App;
