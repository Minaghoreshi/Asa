import React from "react";
import img from "../../../assets/img/cardimg.png";
import { ReactComponent as Menue } from "../../../assets/img/Vector.svg";

export const CardHead = () => {
  return (
    <div className="flex gap-[12px] font-semibold relative">
      <Menue className="absolute right-0" />
      <div className="w-[46px]">
        <img src={img} alt="img" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <h1 className="text-[14px] text-secondarytext mb-0.5">KAYLAY GUNNER</h1>
        <div className="w-[383px] h-[3px] bg-white rounded-costum">
          <div className="w-[273px] h-[3px] bg-gradient-to-r from-gradiantprimary to-primarytext rounded-costum"></div>
        </div>
        <p className="text-[10px] w-[322px]">
          PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY{" "}
        </p>
      </div>
    </div>
  );
};
