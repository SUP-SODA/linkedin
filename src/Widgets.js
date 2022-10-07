import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import { FiberManualRecord } from "@mui/icons-material";

export default function Widgets() {

  const newsArticle = (heading, subTitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord className="widgetIcon" />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is the most Popular JavaScript framework/library", "Top News - 1M")}
      {newsArticle("Coronavirus: India updates", "Top news - 100k")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300k")}
      {newsArticle("Bitcoin Breaks $22k", "Cryto - 5000")}
      {newsArticle("Is Redux too good?", "Code - 300")}
    </div>
  )
}

