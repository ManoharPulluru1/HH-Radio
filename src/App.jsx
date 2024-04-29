import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Credentials from "./LoginFlow/CredentialsPage/Credentials";
import bgImage from "/svgs/BackgroundImg.svg";
import styles from "./App.module.css";
import DashBoard from "./DashboardFlow/Dashboard-HH/DashBoard";
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
          <Route path="/itenary" element={<Itinerary />} /> 
          <Route path="/chooseSeats" element={<ChooseSeats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
