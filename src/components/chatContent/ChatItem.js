import Avatar from "../chatList/Avatar";
import React from "react";
export default function ChatItem(props) {
  return (
    <div
      style={{ animationDelay: `0.2s` }}
      className={`chat__item ${props.user ? props.user : ""}`}
    >
      <div className="chat__meta">
        <span>15:30</span>
      </div>
      <div className="chat__item__content">
        <div className="chat__msg">{props.msg}</div>
      </div>
      <Avatar isOnline="active" image={props.image} />

    </div>

  );
}