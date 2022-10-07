import React from "react";
import "./Post.css";
import InputOption from "./InputOption.js";
import { Avatar } from "@mui/material";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { ChatOutlined, SendOutlined, ShareOutlined } from "@mui/icons-material";

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_button">
        <InputOption
          Icon={ThumbsUpDownOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOption
          Icon={ChatOutlined}
          title="Connect"
          color="gray"
        />
        <InputOption
          Icon={ShareOutlined}
          title="Share"
          color="gray"
        />
        <InputOption
          Icon={SendOutlined}
          title="Send"
          color="gray"
        />
      </div>

    </div>
  )
}