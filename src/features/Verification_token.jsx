import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Verification = () => {
  const location = useLocation(); // Access the current URL
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token"); // Extract token from URL

    // Get the token stored locally when sending the email
    const storedToken = localStorage.getItem("verificationToken");

    if (token && token === storedToken) {
      setIsVerified(true);
      localStorage.removeItem("verificationToken"); // Clear token after verification
    } else {
      setIsVerified(false);
    }
  }, [location]);

  return (
    <div className="verification-container">
      {isVerified ? (
        <h2>Your email has been verified successfully!</h2>
      ) : (
        <h2>Verification failed. Invalid or expired token.</h2>
      )}
    </div>
  );
};

export default Verification;
