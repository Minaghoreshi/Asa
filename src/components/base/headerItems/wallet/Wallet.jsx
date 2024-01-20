import React from "react";
import wallet from "../../../../assets/img/wallet.png";

export const Wallet = () => {
  return (
    <div className="header--item flex flex-col items-center gap-[3.67px] text-[8px]">
      <img src={wallet} alt="wallet" />
      <span className="text-secondarytext">
        W<span className="text-primarytext">ALLET</span>
      </span>
    </div>
  );
};
