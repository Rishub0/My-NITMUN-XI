import React from "react";
import SignupPage2 from "./SignupPage2";
import { useState } from "react";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="ring-style">
          <RingLoader color="#ffffff" loading={loading} size={150} />
        </div>
      ) : (
        <SignupPage2 />
      )}
    </div>
  );
};

export default SignupPage;