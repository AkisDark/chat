import Avatar from "./Avatar";
import React from "react";
export default function ChatListItems(props) {
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`chatlist__item ${props.active ? props.active : ""
        } `}
    >

      <Avatar
        image={props.image ? props.image : "http://placehold.it/80x80"}
        isOnline={props.isOnline}
      />


      <div className="userMeta">
        <p style={{ display: "flex" }}>{props.name} <span style={{ textTransform: "capitalize", margin: "0 5px", backgroundColor: "#ecf0f1", color: "#34495e", padding: "1px 12px", borderRadius: "8px" }}>{props.type}</span></p>
        <div style={{ display: 'flex', justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontSize: "13px", color: '#bdc3c7', width: "50%" }}>I'm fine</div>
          <div className="activeTime" style={{ textAlign: "end", fontSize: "13px", color: '#bdc3c7', width: "50%" }}>14:34</div>
        </div>

      </div>


    </div>
  );
}