import React from "react";
import messanger from "../../../../assets/img/messanger.png";

export const Messanger = () => {
  return (
    <div className="header--item flex flex-col items-center gap-[3.67px] text-[8px]">
      <img src={messanger} alt="messanger" />
      <span>
        ME<span className="text-secondarytext">S</span>
        SENGER
      </span>
    </div>
  );
};
