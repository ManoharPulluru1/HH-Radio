import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credentials from "./LoginFlow/CredentialsPage/Credentials";
import bgImage from "/svgs/BackgroundImg.svg"; // Adjusted import path
import styles from "./App.module.css"; // Import module.css styles

import DashBoard from "./DashboardFlow/Dashboard-HH/DashBoard";
// import Itenary from "./DashboardFlow/Itenary/EventCard";
import ChooseSeats from "./DashboardFlow/ChooseSeats/ChooseSeats";
import Itinerary from "./DashboardFlow/Itenary/Itinerary";

const App = () => {
  return (
    <div className={styles.AppMain}>
      <img className={styles.bgImage} src={bgImage} alt="bgImage" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Credentials />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route path="/itenary" element={<Itenary />} /> */}
          <Route path="/itenary" element={<Itinerary />} /> 
          <Route path="/chooseSeats" element={<ChooseSeats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
