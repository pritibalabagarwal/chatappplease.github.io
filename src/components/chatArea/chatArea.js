/* -------------- IMPORT CSS -------------- */
import Styles from './chatArea.module.css';
/* -------------- IMPORT HOOKS -------------- */
import React, { useEffect, useRef, useState } from 'react';



/* List of users */
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
/* Function to display the chatting area and messages */
function ChatArea({ messages }) {
  const chatAreaRef = useRef(null);
  const [likes, setLikes] = useState({});

  /* To keep the scroll bar at latest message */
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLike = (index) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [index]: prevLikes[index] ? prevLikes[index] + 1 : 1,
    }));
  };


  return (
    <div ref={chatAreaRef} className={Styles.chatArea}>
      {messages.length === 0 ? (
        <div className={Styles.noMessage}>Nothing to show in chat</div>
      ) : (
        messages.map((message, index) => {
          const userIndex = user_list.indexOf(message.username);
          const userClass = `user${userIndex + 1}`;

          return (
              <div className={Styles.container}>
                <span className={Styles.username}>{message.username}: </span>
                <div key={index} className={`${Styles.message} ${Styles[userClass]}`}>
                  <div className={Styles.messageContent}>{message.message}</div>
                </div>
                <div className={Styles.likes}>
                  {likes[index]===undefined ? 
                    <img src="https://cdn-icons-png.flaticon.com/128/2589/2589197.png"
                      onClick={() => handleLike(index)} />
                  : <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" 
                    onClick={() => handleLike(index)}/>
                  }
                  <span>{likes[index] || 0}</span>
                </div>
              </div>
          );
        })
      )}
    </div>
  );
}



/* -------------- EXPORT MODULES -------------- */
export default ChatArea;
