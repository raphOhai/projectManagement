import React from "react";
import "./styles.scss";
import { Button1 } from "@/utils/butons/button1";
export const Nav = () => {
  return (
    <div className="stack gap2 nav-root ">
      <div className="flex gap">
        <h1>Webdev</h1>
        <div className="end">
          <Button1 />
        </div>
      </div>
      <ProjectStatusList />
    </div>
  );
};
const ProjectStatusList = () => {
  return (
    <div className="flex gap  status-list-root ">
      <div className="center">
        <p>Discussion</p>
      </div>
      <div className="center active">
        <p>TaskI</p>
      </div>
      <div className="center"></div>
    </div>
  );
};
