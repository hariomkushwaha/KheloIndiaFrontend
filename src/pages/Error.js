import React from "react";

const Error = () => {
  const ErrorPage = {
    height: "90vh",
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  };
  const ErrorCode = {
    pointerEvents: "none",
    fontSize: "10em",
    fontWeight: "800",
    letterSpacing: "35px",
    lineHeight: "0.75em",
  };
  const ErrorNote = {
    fontSize: "3em",
    fontWeight: "500",
    pointerEvents: "none",
  };
  return (
    <div style={ErrorPage}>
      <div style={ErrorCode}>404</div>
      <div style={ErrorNote}>URL NOT FOUND</div>
    </div>
  );
};

export default Error;
