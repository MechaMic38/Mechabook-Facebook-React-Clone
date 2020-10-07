import "../CSS/Header.css";
import React, { useEffect } from "react";

import logo from "../Images/mechabook-logo.png";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../Context API/StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  //Enable visual effect
  useEffect(() => {
    const inputContainer = document.querySelector(".header__input");
    const input = document.querySelector(".header__input > input");

    input.addEventListener("focus", () => {
      inputContainer.classList.add("header__input--focused");
    });

    input.addEventListener("blur", () => {
      inputContainer.classList.remove("header__input--focused");
    });
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Facebook Logo" />

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user?.photoURL} />
          <h4>{user?.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
