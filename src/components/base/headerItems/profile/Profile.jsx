import React from "react";
import profile from "../../../../assets/img/profile.png";

export const Profile = () => {
  return (
    <div className="header--item flex flex-col items-center gap-[3.67px] text-[8px]">
      <img src={profile} alt="profile" />
      <span>
        PRO<span className="text-secondarytext">F</span>
        ILE
      </span>
    </div>
  );
};
