import "../CSS/Sidebar.css";
import React from "react";

import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import { useStateValue } from "../Context API/StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar" id="sidebar">
      <SidebarRow src={user?.photoURL} title={user?.displayName} />

      <a
        href="https://mechamic38-covid19-tracker.web.app/countryData"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
      </a>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <a
        href="https://challenge-f0ac9.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      </a>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
