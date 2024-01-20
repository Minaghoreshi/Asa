import React from "react";
import magnifire from "../../../../assets/img/magnifier.png";

export const Explore = () => {
  return (
    <div className="header--item flex flex-col items-center gap-[3.67px] text-[8px]">
      <img src={magnifire} alt="explore" />
      <span>
        E<span className="text-secondarytext">X</span>
        PLORE
      </span>
    </div>
  );
};
