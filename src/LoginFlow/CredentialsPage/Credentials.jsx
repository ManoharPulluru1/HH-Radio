import React, { useState } from 'react';
import styles from './Credentials.module.css'; // Import module.css styles
import hhLogo from '/svgs/hhLogo.svg';
import OtpPage from '../OtpPage/OtpPage';
import Info from '../Info/Info';
import EventSelection from '../EventSelection/EventSelection';

const Credentials = () => {
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isConfirmClicked, setIsConfirmClicked] = useState(false);
  const [isInfoConfirmed, setIsInfoConfirmed] = useState(false);

  const clickedConfirm = () => {
    setIsConfirmClicked(true);
  };

  const clickedInfoConfirm = () => {
    setIsInfoConfirmed(true);
    console.log("Info Confirmed");
  };

  return (
    <div className={styles.CredentialsMain}>
      {isConfirmClicked ? (
        isInfoConfirmed ? (
          <>
            <EventSelection />
          </>
        ) : (
          <>
            <Info clickedInfoConfirm={clickedInfoConfirm} />
          </>
        )
      ) : (
        <>
          <img className={styles.hhLogo} src={hhLogo} alt="hhLogo" />
          {isNextClicked ? (
            <>
              <OtpPage clickedConfirm={clickedConfirm} />
            </>
          ) : (
            <>
              <div className={styles.credentialsContent}>
                <div className={styles.ipCreds}>
                  <input className={styles.countryCodeIp} type="text" placeholder="+91" />
                  <input className={styles.phNumberIp} type="text" placeholder="Enter your mobile number" />
                </div>
                <div className={styles.taglineCreds}>We will send you one-time password to your mobile number</div>
                <div onClick={() => setIsNextClicked(true)} className={styles.buttonCreds}>
                  Next
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Credentials;
