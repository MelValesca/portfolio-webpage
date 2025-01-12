import React from "react";
import SideBar from "../components/SideBar";

const Projects = () => {
  const divisions = [
    {
      name: "Web apps",
      links: ["\ttest1", "\ttest2", "\ttest3"],
    },
    {
      name: "Desktop apps",
      links: ["\tCurler (GUI)"],
    },
    {
      name: "Scripts",
      links: ["\tShell/Bash", "\tPython", "\tC"],
    },
  ];

  return <SideBar categories={divisions}></SideBar>;
};

export default Projects;
