import "../CSS/Post.css";
import React, { useEffect, useState } from "react";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import axios from "../axios";
import { Avatar } from "@material-ui/core";

function Post({ username, photoURL, imgName, message, timestamp }) {
  const [image, setImage] = useState("");

  /*useEffect(() => {
    const getImage = async () => {
      await axios
        .get(`/retrieve/images/single?name=${imgName}`)
        .then((result) => setImage(result.data))
        .catch((error) => console.error(error));
    };

    if (imgName) getImage();
  }, []);*/

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={photoURL} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      {imgName != "" && (
        <div className="post__image">
          <img
            src={`https://mechabook.herokuapp.com/retrieve/images/single?name=${imgName}`}
          />
        </div>
      )}

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
