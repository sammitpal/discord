import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './ChannelList.css'

function ChannelList({id, name}) {
    const {channelid} = useParams();
    return (
        <Link to = {`/channel/${id}`}>
            <div className="eachChannel">
            <h4 id={id}>
                <span className="eachChannel_hash">#</span>{name}
            </h4>
        </div>
        </Link>
    )
}

export default ChannelList
