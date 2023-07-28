/* -------------- IMPORT CSS -------------- */
import Style from "./footer.module.css";
/* -------------- IMPORT HOOKS -------------- */
import React, { useState } from 'react';
/* -------------- IMPORT COMPONENTS -------------- */
import ChatArea from "../../components/chatArea/chatArea";



/* List of users*/
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
/* Function to display the input and send button */
function Footer() {
    
  const [messages, setMessages] = useState([]);
    
    /* Add a message to list and display it on screen */
    const handleMessageSubmit = (event) => {
        event.preventDefault();
        const inputMessage = event.target.message.value;
        const randomUser = user_list[Math.floor(Math.random() * user_list.length)];

        if (inputMessage.trim() !== "") {
        const newMessage = {
            username: randomUser,
            message: inputMessage,
        };

        setMessages([...messages, newMessage]);
        event.target.reset();
        }
    };



    return (
        <>
            <ChatArea messages={messages} />
            <form onSubmit={handleMessageSubmit} className={Style.sendBar}>
                <input type="text" name="message" placeholder="Type a message" className={Style.input} />
                <button type="submit" className={Style.sendButton}>Send</button>
            </form>
        </>
    )
}



/* -------------- EXPORT MODULES -------------- */
export default Footer;