import React from "react";
import styles from "./chatbox.module.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachmentIcon from "@material-ui/icons/Attachment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/Mic";

function ChatFooter() {
  return (
    <div className={styles.chat_footer}>
      <InsertEmoticonIcon />
      <AttachmentIcon />
      <div className={styles.chat_input}>
        <SearchOutlinedIcon className={styles.icon} />
        <input type="text" placeholder="Type a message" />
      </div>
      <MicIcon />
    </div>
  );
}

export default ChatFooter;
