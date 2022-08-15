import React from "react";

const Loader = ({ loading }) => {
  return (
    <>
      <div className={loading ? "loader" : "loader hide"}>
        <div className="centered">
          <div className="blob1"></div>
          <div className="blob2"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
