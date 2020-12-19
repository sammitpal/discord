import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Add, Call, Headset, Mic, Settings } from "@material-ui/icons";
import ChannelList from "./ChannelList";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { auth, database } from "./firebase";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    database.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  const AddChannel = () => {
    const channelName = prompt("Enter Channel Name");
    if (channelName) {
      database.collection("channels").add({
        name: channelName,
      });
    }
  };
  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <div className="sidebar h-view">
      <div className="sidebar_top">
        <h3>iCoder</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h3>Text Channels</h3>
          </div>
          <Add className="add_channel" onClick={AddChannel} />
        </div>
        <div class="channel_list">
          {channels.map((channel) => (
            <ChannelList
              key={channel.id}
              id={channel.id}
              name={channel.data.name}
            />
          ))}
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon />
        <div className="voice_info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <Call/>
      </div>
      <div className="sidebar_profile">
        <div className="profile">
          <div className="profile_details">
            <Avatar
              src={user.photoURL}
              onClick={handleAuth}
              className="sidebar_avatar"
            />
            <div class="profile_id">
            <p>{user.displayName}</p>
            <p className="userid"># {user.uid.substring(0,5)}</p>
            </div>
          </div>
          <div className="profile_icons">
            <Mic />
            <Headset />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
