import React from "react";
import { CardHead } from "./CardHead";

import { CardFooter } from "./CardFooter";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <div className="card">
      <CardHead />
      <CardBody />
      <CardFooter />
    </div>
  );
};
