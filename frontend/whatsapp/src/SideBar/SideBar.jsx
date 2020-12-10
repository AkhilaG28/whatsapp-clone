import React from "react";
import styles from "./sidebar.module.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { IconButton, Avatar } from "@material-ui/core";
import SideBarChatName from "./SideBarChatName";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      {/* header with profile icon and menu */}
      <div className={styles.sidebar_header}>
        <Avatar src="https://avatars2.githubusercontent.com/u/61727888?s=400&u=f3346172f1c29afdd339d33d786c90b3396129eb&v=4" />
        <div>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Search bar */}
      <div className={styles.sidebar_search}>
        <div className={styles.sidebar_searchContainer}>
          <SearchOutlinedIcon className={styles.icon} />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      {/* SideBar Chat Names */}
      <div className={styles.sidebar_chatNames}>
        <SideBarChatName />
      </div>
    </div>
  );
}

export default SideBar;
