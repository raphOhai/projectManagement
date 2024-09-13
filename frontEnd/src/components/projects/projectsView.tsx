import React from "react";
import "./styles.scss";
import { CheckBox } from "@/utils/checkbox/checkbox";
import Image from "next/image";

export const ProjectView = () => {
  return (
    <div className="project-view-root gap2">
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
      <ProjectsCards />
    </div>
  );
};

const ProjectsCards = () => {
  return (
    <div className="projectCards stack gap2">
      <div className="start">
        <div className="project-name center">
          <p>webdev 2</p>
        </div>
      </div>

      <div className="expand">
        <Image src="/expand.svg" alt="logo" height={20} width={20} />
      </div>

      <div>
        <p>Overall UX Process of full product for first version</p>
      </div>
      <div className="stack gap2">{/* <TaskActions /> */}</div>
      <div className="flex gap">
        <Image src="/task2.svg" alt="logo" height={30} width={30} />
        <div>
          <h5>2 steps</h5>
        </div>
      </div>
    </div>
  );
};

const TaskActions = () => {
  return (
    <div className="flex gap ">
      <div>
        <CheckBox />
      </div>
      <div>
        <h3>Primary Research</h3>
      </div>
    </div>
  );
};
