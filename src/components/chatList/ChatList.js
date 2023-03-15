import React, { useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

const allChatUsers = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    id: 1,
    name: "Raid",
    active: true,
    isOnline: true,
    type: 'driver'
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
    id: 3,
    name: "Walid",
    active: true,
    isOnline: true,
    type: 'driver'
  },
];

const ChatList = () => {
  const [allChats, setAllChats] = useState(allChatUsers);

  return (
    <div className="main__chatlist">
      <div className="chatlist__heading">
        {
          /*<h2>Chats</h2>
                  <button className="btn-nobg">
                    <i className="fa fa-ellipsis-h"></i>
                  </button>*/
        }
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Recherce" required />

        </div>
      </div>
      <div className="chatlist__items">
        {allChats.map((item, index) => {
          return (
            <ChatListItems
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
              type={item.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;