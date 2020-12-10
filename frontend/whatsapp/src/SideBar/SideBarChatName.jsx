import React from "react";
import styles from "./sidebar.module.css";
import { Avatar } from "@material-ui/core";

function SideBarChatName() {
  return (
    <div className={styles.sidebar_chat}>
      <Avatar className={styles.sidebar_chatPic} />
      <div className={styles.sidebar_chatDescp}>
        <h2>Chandu</h2>
        <p>Some text message</p>
      </div>
    </div>
  );
}

export default SideBarChatName;
