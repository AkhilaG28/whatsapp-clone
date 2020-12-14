import React from "react";
import styles from "./chatbox.module.css";

function ChatBody() {
  return (
    <div className={styles.chatbody}>
      <p className={styles.chatbody_sender}>
        <span className={styles.chat_name}>Chandu</span>
        This is a message
        <span className={styles.chat_timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>
      <p className={styles.chatbody_receiver}>
        <span className={styles.chat_name}>Akki</span>
        Replying to the message
        <span className={styles.chat_timestamp}>
          {new Date().toUTCString()}
        </span>
      </p>
    </div>
  );
}

export default ChatBody;
