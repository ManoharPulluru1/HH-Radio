import React, { useRef } from 'react';
import styles from './OtpPage.module.css';

const OtpPage = ({ clickedConfirm }) => {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (index, e) => {
    const input = inputRefs[index].current;
    const nextInput = inputRefs[index + 1]?.current;
    if (e.target.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  };

  return (
    <div className={styles.OtpPageMain}>
      <div className={styles.ipCreds}>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            className={styles.otpDigit}
            type='text'
            placeholder=''
            maxLength='1'
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
      <div className={styles.taglineCreds}>We will send you one-time password to your mobile number</div>
      <div onClick={clickedConfirm} className={styles.buttonCreds}>Confirm</div>
    </div>
  );
};

export default OtpPage;
