import "../CSS/MessageSender.css";
import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import axios from "../axios";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../Context API/StateProvider";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/gif"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImage(e.target.files[0]);
      setError(null);
    } else {
      setImage(null);
      setError("Please select an image file (JPEG / PNG / GIF)");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadPost = async () => {
      if (image) {
        const imgData = new FormData();
        imgData.append("file", image, image.name);

        await axios
          .post("upload/image", imgData, {
            headers: {
              accept: "application/json",
              "Accept-Language": "en-US,en;q=0.8",
              "Content-Type": `multipart/form-data; boundary=${imgData._boundary}`,
            },
          })
          .then(async (res) => {
            await axios
              .post("/upload/post", {
                username: user.displayName,
                photoURL: user.photoURL,
                imgName: res.data.filename,
                text: input,
                timestamp: new Date().toUTCString(),
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      } else {
        await axios
          .post("/upload/post", {
            username: user.displayName,
            photoURL: user.photoURL,
            imgName: "",
            text: input,
            timestamp: new Date().toUTCString(),
          })
          .catch((err) => console.error(err));
      }
    };

    uploadPost();
    setInput("");
    setImage(null);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="messageSender__fileSelector">
            {!image && (
              <label
                className="messageSender__fileSelectorAdd"
                htmlFor="upload"
              >
                <AddIcon />
              </label>
            )}
            {image && (
              <label
                className="messageSender__fileSelectorName"
                htmlFor="upload"
              >
                <span>{truncate(image.name, 10)}</span>
              </label>
            )}
            {error && <span>{error}</span>}
            <input type="file" id="upload" onChange={handleChange} />
          </div>
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "#eb2828" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "#3cac3c" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "#ffb52c" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
