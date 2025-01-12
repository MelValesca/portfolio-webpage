import React from "react";
import SideBar from "../components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Curler from "./Curler";
import "../styles/Projects.css";

const Projects = () => {
  const divisions = [
    {
      name: "Web apps",
      links: [
        { name: "test1", path: "/projects/web-apps/test" },
        { name: "test2", path: "/projects/web-apps/test" },
        { name: "test3", path: "/projects/web-apps/test" },
      ],
    },
    {
      name: "Desktop apps",
      links: [{ name: "Curler (GUI)", path: "/projects/desktop-apps/curler" }],
    },
    {
      name: "Scripts",
      links: [
        { name: "Shell/Bash", path: "/projects/scripts/shell" },
        { name: "Python", path: "/projects/scripts/python" },
        { name: "C", path: "/projects/scripts/c" },
      ],
    },
  ];

  return (
    <div className="projects-main">
      <SideBar categories={divisions} />

      <div className="contentWrap">
        <Routes>
          <Route path="/web-apps/test" element={<div>Content test</div>} />
          <Route path="/desktop-apps/curler" element={<Curler />} />
          <Route
            path="/scripts/shell"
            element={<div>Content for Shell/Bash</div>}
          />
          <Route
            path="/scripts/python"
            element={<div>Content for Python</div>}
          />
          <Route path="/scripts/c" element={<div>Content for C</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Projects;
