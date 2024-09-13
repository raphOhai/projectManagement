import React from "react";
import "./styles.scss";
import Image from "next/image";
import { ProjectListView } from "../projects/projectListView";
import { Nav } from "../navbar/Nav";
import { ProjectsCards } from "../projects/projectsCards";
import { ProjectView } from "../projects/projectsView";

export const LayoutRoot = () => {
  return (
    <div className="root-layout-container">
      <div>
        <div className="box-1 stack gap3 fixed">
          <div className="center">
            <Image src="/logo.svg" alt="logo" height={30} width={30} />
          </div>

          <div className="center">
            <Image src="/add.svg" alt="logo" height={30} width={30} />
          </div>
          <div className="center">
            <Image src="/task.svg" alt="logo" height={30} width={30} />
          </div>
        </div>
      </div>

      <div>
        <div className="box-2 stack gap2 fixed ">
          <h1>All Projects</h1>

          <ProjectListView />
        </div>
      </div>

      <div className="box-3">
        <Nav />
        <div className="body-content">
          <ProjectView />
        </div>
      </div>
    </div>
  );
};
