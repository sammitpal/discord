import { Button } from '@material-ui/core';
import { Add, Gif, InsertEmoticon, Search } from '@material-ui/icons'
import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import './ChatFooter.css'
import { database } from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
function ChatFooter() {
    const {channelid} = useParams();
    const [input, setInput] = useState("");
    const [{user}, dispatch] = useStateValue();
    console.log(input);
    const send = (e) => {
        e.preventDefault();
        database.collection('channels').doc(channelid).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            username: user.displayName,
            photo: user.photoURL
        })
        setInput("");
    }
    return (
        <form className="chatfooter">
            <Add/>
            <input type="text" value = {input} onChange = {(e)=>setInput(e.target.value)}/>
            <Search/>
            <InsertEmoticon/>
            <Gif/>
            <button className="submit" disabled={!channelid} onClick={send}>Submit</button>
        </form>
    )
}
export default ChatFooter
