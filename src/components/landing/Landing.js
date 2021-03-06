import React from "react";

const Landing = () => {
  const landingContainer = {
    height: "100%",
    width: "100%",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7191c4"
  };
  return (
    <div style={landingContainer}>
      <h1>Selling products with help of chatbots</h1>
    </div>
  );
};

export default Landing;
