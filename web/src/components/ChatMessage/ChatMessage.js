import React from "react";
import './ChatMessage.css'
import Avatar from "../../asserts/avatar";

// User (user - chatGPT)
// Message - Prompt

//{
//    user: 'gpt'
//    message: 'Crie um nome de artigo'
//}

export const ChatMessage = ({message}) => {
    <div className={`chat-message ${message.user === 'gpt'} && 
    "chatgpt"`}
    >

    <div className="chat-message-center">
        <div className={
            `avatar
             ${message.user === 'gpt' && "chatgpt"}`}
        >
            {message.user === 'gpt' && (
                <Avatar/>
            )}

        </div>

        <div className="message">
            {message.message}
        </div>

    </div>
    </div>
}