import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { database } from "./firebase";
import Messages from "./Messages";
function Chat() {
  const { channelid } = useParams();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (channelid) {
      database
        .collection("channels")
        .doc(channelid)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelid]);
  return (
    <div className="chat">
      <ChatHeader />
      {channelid ? (
        <div className="chat_messages">
          {messages.map((message) => (
            <Messages
              username={message.username}
              photo={message.photo}
              message={message.message}
            />
          ))}
        </div>
      ) : (
        <div className="back_text">
          <p>Tap on any channel and start texting</p>
        </div>
      )}

      <ChatFooter />
    </div>
  );
}

export default Chat;
