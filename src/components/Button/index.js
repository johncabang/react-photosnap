import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        fontSize: 12,
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#000",
        border: "none",
        cursor: "pointer",
        width: "158px",
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
