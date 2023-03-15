import React, { useState, useRef, useEffect } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

const ChatContent = () => {
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        if (msg !== "") {
          const newChatItem = {
            key: 1,
            type: "",
            msg: msg,
            image:
              "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          };
          setChat([...chat, newChatItem]);
          scrollToBottom();
          setMsg("");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    scrollToBottom();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [chat, msg]);

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  const sendMessage = () => {
    if (msg !== "") {
      const newChatItem = {
        key: 1,
        type: "",
        msg: msg,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      };
      setChat([...chat, newChatItem]);
      scrollToBottom();
      setMsg("");
    }
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <section style={{ display: "flex" }}>
              <section>
                <div>Raid</div>
                <small>En Ligne</small>
              </section>
              <section>
                <span className="typeUser">Driver</span>
              </section>
            </section>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">

          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
          />
          <button onClick={sendMessage} className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;