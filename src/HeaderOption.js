import React from "react";
import "./HeaderOption.css"

export default function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <img className="headerOption_avatar" src={avatar} alt="avatar" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}