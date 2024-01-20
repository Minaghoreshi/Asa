import React from "react";
import project from "../../../../assets/img/project.png";

export const Project = () => {
  return (
    <div className="header--item flex flex-col items-center gap-[3.67px] text-[8px]">
      <img src={project} alt="project" />
      <span className="text-secondarytext">
        PRO<span className="text-primarytext">J</span>
        ECT
      </span>
    </div>
  );
};
