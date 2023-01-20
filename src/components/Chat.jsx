import { React, useContext } from 'react'
import Video from "../img/video.png"
import Voice from "../img/voice.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";


const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={Video} alt="" />
                    <img src={Voice} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat
