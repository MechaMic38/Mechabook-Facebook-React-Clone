import "../CSS/Feed.css";
import React, { useEffect, useState } from "react";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import axios from "../axios";
import Pusher from "pusher-js";

import FlipMove from "react-flip-move";
import { v4 as uuidv4 } from "uuid";
import { pusherKey } from "../keys";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios
        .get("/retrieve/posts")
        .then((result) => {
          setPosts(result.data);
        })
        .catch((error) => console.error(error));
    };

    getPosts();
  }, []);

  useEffect(() => {
    const pusher = new Pusher(pusherKey, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("posts");
    channel.bind("inserted", (newPost) => {
      newPost._id = uuidv4();
      let postsList = [...posts, newPost];
      postsList.sort((b, a) =>
        a.timestamp > b.timestamp ? 1 : a.timestamp < b.timestamp ? -1 : 0
      );
      setPosts(postsList);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [posts]);

  console.log(posts);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <FlipMove>
        {posts.map(function (post) {
          return (
            <div key={post._id}>
              <Post
                key={post._id}
                username={post.username}
                photoURL={post.photoURL}
                imgName={post.imgName}
                message={post.text}
                timestamp={post.timestamp}
              />
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
