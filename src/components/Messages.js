import { Avatar } from "@material-ui/core";
import React from "react";
import "./Messages.css";
function Messages({ username, photo, message }) {
  return (
    <div className="messages">
      <Avatar src={photo}/>
      <div class="message_detail">
        <h3>{username}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
