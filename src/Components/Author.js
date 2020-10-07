import "../CSS/Author.css";
import React, { useEffect, useState } from "react";

import SidebarRow from "./SidebarRow";

import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import CodeIcon from "@material-ui/icons/Code";

function Author() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/myProjects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  const buildProjects = projects.map(function (projects) {
    let projectImage = "Images/MyProjects/" + projects.image;

    return (
      <div key={projects.title} className="author__project">
        <div className="author__projectWrap">
          <img alt={projects.title} src={projectImage} />
          <div className="overlay">
            <div className="author__projectMeta">
              <h5>{projects.title}</h5>
            </div>
          </div>
          <a href={projects.url} target="_blank" rel="noopener noreferrer">
            <div className="link-icon">
              <OpenInBrowserIcon />
            </div>
          </a>
          <a href={projects.code} target="_blank" rel="noopener noreferrer">
            <div className="code-icon">
              <CodeIcon />
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="author" id="author">
      <h3 className="author__title">Author of the Website</h3>
      <a
        href="https://mechamic38.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SidebarRow
          src="https://avatars1.githubusercontent.com/u/69167202?s=460&u=f92c409b9b3020714d34c3aa56d3697b10d08204&v=4"
          title="Michael P. (MechaMic_38)"
        />
      </a>

      <div className="author__divider" />

      <h3 className="author__projectsTitle">Other Projects</h3>
      <div id="portfolio__wrapper" className="">
        {buildProjects}
      </div>
    </div>
  );
}

export default Author;
