import React from "react";
import Logo from "../../../assets/img/logo.png";

import { Messanger, Explore, Profile, Project, Wallet } from "../headerItems";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex gap-[82px] text-primarytext font-semibold">
        {" "}
        <Messanger />
        <Explore />
        <Profile />
        <Project />
        <Wallet />
      </div>
    </div>
  );
};
