import React from 'react';
import styles from './Info.module.css'; // Import module.css styles

const Info = ({ clickedInfoConfirm }) => {
  return (
    <div className={styles.InfoMain}>
      <div className={styles.Infotitle}>Enhance your dashboard by giving us this information</div>
      <div className={styles.InfoInputs}>
        <input className={styles.InfoInput} type='text' placeholder='Full Name' />
        <input className={styles.InfoInput} type='text' placeholder='Duration of the Visit' />
        <input className={styles.InfoInput} type='text' placeholder='Purpose of visit' />
        <input className={styles.InfoInput} type='text' placeholder="How many guests?" />
      </div>
      <div onClick={clickedInfoConfirm} className={styles.InfoButton}>Confirm</div>
      <div className={styles.InfoSkip}>Skip</div>
    </div>
  );
};

export default Info;
