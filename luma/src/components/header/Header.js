import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  const navigate = useNavigate()
  return (
    <div className="header" style={{display:"flex", justifyContent: "space-between"}}>
      <div tyle={{display:"flex", }}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <div style={{ display: "flex" , alignItems: "center", justifyContent:"flex-start"}}>
        <button onClick={e => { navigate('/home') }} style= {{backgroundColor:"blue", minWidth:"60px"}}>Home</button>
        <button onClick={e => { localStorage.removeItem('employee'); navigate('/') }} style= {{minWidth:"90px", backgroundColor:"red"}}>Log Out</button>
      </div>
    </div>
  );
}
