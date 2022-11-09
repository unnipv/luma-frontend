import React from "react";
import "./Footer.css";

export default function Header(props) {
  return (
    <div className="footer">
      <h3>{props.note}</h3>
    </div>
  );
}
