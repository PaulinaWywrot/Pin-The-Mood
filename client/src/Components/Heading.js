import React from "react";
import girlImage from "../img/girl.png";

const Heading = () => {
  return (
    <div className="custom-header d-flex align-items-center justify-content-around">
      <div>
        <div>
          <h2 className="h2-custom">Pin The Mood</h2>
          <h3 className="pt-3 h3-custom">
            Your Personal Recommendation Diary
            <br /> with a Mood Twist
          </h3>
        </div>
      </div>
      <div className="align-self-end">
        <img src={girlImage} alt="girl" className="galinha" />
      </div>
    </div>
  );
};

export default Heading;
