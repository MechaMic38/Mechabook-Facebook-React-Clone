import "../CSS/StoryReel.css";
import React from "react";

import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://external-preview.redd.it/vIcf14Xb88_wR4u3QreG1jOipwKyINrrV6BOHzPYHPs.jpg?auto=webp&s=a3f244390d43ed23aec4b248bb4571ef8065d4e0"
        profileSrc="https://avatars1.githubusercontent.com/u/69167202?s=460&u=f92c409b9b3020714d34c3aa56d3697b10d08204&v=4"
        title="MechaMic_38"
      />
      <Story
        image="https://store-images.s-microsoft.com/image/apps.28728.69945075044825416.99d4e5d8-fac1-421b-8986-d0fed49db992.61e009b6-5efb-456c-8f70-98bd73e50a3d"
        profileSrc="https://avatars1.githubusercontent.com/u/69167202?s=460&u=f92c409b9b3020714d34c3aa56d3697b10d08204&v=4"
        title="MechaMic_38"
      />
      <Story
        image="https://s3.gaming-cdn.com/images/products/3188/271x377/dirt-rally-20-cover.jpg"
        profileSrc="https://avatars1.githubusercontent.com/u/69167202?s=460&u=f92c409b9b3020714d34c3aa56d3697b10d08204&v=4"
        title="MechaMic_38"
      />
    </div>
  );
}

export default StoryReel;
