import { useState } from "react";
import React from 'react';
import styles from './EventSelection.module.css'; // Import module.css styles
import { Link } from "react-router-dom";

const EventSelection = () => {
  const [fill, setFill] = useState(100);
  
  return (
    <div className={styles.EventSelectionMain}>
      <div className={styles.eventSelectionTitle}>Choose three or more of your favourites.</div>
      <div className={styles.eventSelectionTagLine}>Tap once on the preferences you like, or twice on the ones you love. Press and hold the ones you don’t</div>
      <div className={styles.eventSelectionBody}></div>
      <div className={styles.eventSelectionFooter}>
        <div className={styles.eventSelectorFooterBox}>Reset</div>
        <div className={styles.eventSelectorFooterBox}>
          <div style={{ backgroundImage: `conic-gradient(white ${fill}deg, grey 0 235deg)` }} className={styles.piechart}>
            <div className={styles.piechartText}>You</div>
          </div>
        </div>
        <Link to="/dashboard" className={styles.eventSelectorFooterBox}>Skip</Link>
      </div>
    </div>
  );
}

export default EventSelection;
