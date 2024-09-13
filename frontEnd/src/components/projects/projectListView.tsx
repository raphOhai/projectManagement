import React from "react";
import "./styles.scss";
import Image from "next/image";
export const ProjectListView = () => {
  return (
    <div className="stack gap1">
      <div className="active-project">
        <ProjectList />
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex gap1">
      <div className="stack ga">
        <div>
          <h3>ProjectFlow Pros</h3>
        </div>
        <div>
          <h5>WebApp</h5>
        </div>
      </div>
      {/* <div>
        <Image src="/sideArrow.svg" alt="logo" height={30} width={30} />
      </div> */}
    </div>
  );
};
