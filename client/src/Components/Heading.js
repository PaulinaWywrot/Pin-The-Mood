import React from "react";
import girlImage from "../img/girl.png";

const Heading = () => {
  return (
    <div className="custom-header d-flex flex-column flex-md-row align-items-center justify-content-md-around">
      <div>
        <h2 className="h2-custom">Pin The Mood 😊 😔 🤩</h2>
        <h3 className="pt-3 h3-custom">
          Your Personal Recommendation Diary
          <br /> with a Mood Twist
        </h3>
      </div>
      <div className="align-self-center mt-3 mt-md-0 text-center">
        <img src={girlImage} alt="girl" className="galinha img-fluid" />
      </div>
    </div>
  );
};

export default Heading;
