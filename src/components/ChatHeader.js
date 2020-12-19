import { Group, Help, Notifications, Search, Send } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './ChatHeader.css'
import { database } from "./firebase";
function ChatHeader() {
  const { channelid } = useParams();
  const [channelname, setChannelName] = useState("");
  useEffect(()=>{
    if(channelid){
      database.collection('channels').doc(channelid).onSnapshot(snapshot => (
        setChannelName(snapshot.data().name)
      ))
    }
  },[channelid])
  return (
    <div className="chat_header">
      <div className="burger">
      <hr/>
      <hr/>
      <hr/>
      </div>
      <h3><span>#</span>{channelname}</h3>
      <div className="chat_header_right">
      <Notifications/>
      <Group/>
      <form>
        <input type="text" name="" id="" placeholder="Search"/>
        <Search/>
      </form>
      <Send className="sendIcon"/>
      <Help/>
      </div>
    </div>
  );
}

export default ChatHeader;
