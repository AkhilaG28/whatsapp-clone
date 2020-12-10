import React from "react";
import styles from "./chatbox.module.css";
import { Avatar } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function ChatBox() {
  return (
    <div className={styles.chat}>
      {/* Chat Box Top */}
      <div className={styles.chatbox_details}>
        <div className={styles.chatbox_chatName}>
          <Avatar />
          <h5>Chandu</h5>
        </div>

        <div className={styles.chatbox_info}>
          <SearchOutlinedIcon />
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
