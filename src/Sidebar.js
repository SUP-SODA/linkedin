import { Avatar } from "@mui/material";
import sidebar from "./sidebar.jpg";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {

  function recentItem(topics) {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topics}</p>
      </div>
    )
  }

  return (
    <div className="sidebar">

      <div className="sidebar_top">
        <img src={sidebar} alt=""></img>
        <Avatar className="sidebar_avatar" />
        <h2>Sahil Kumar Jamwal</h2>
        <h4>sahilkumarjamwal464@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,567</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,560</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("designer")}
        {recentItem("developer")}
      </div>
    </div>
  )
}