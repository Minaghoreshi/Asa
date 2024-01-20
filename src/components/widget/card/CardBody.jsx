import React from "react";
import swiss from "../../../assets/img/swiss.png";
export const CardBody = () => {
  return (
    <div className="card-body">
      {/* <!-- Row 1 --> */}
      <div className="card-body-row">
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">SwitZerland</span>
          </div>
          <span className="text-[12px]">COUNTRY</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">Full-Time</span>
          </div>
          <span className="text-[12px]">COOPRATION TYPE</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">Designer</span>
          </div>
          <span className="text-[12px]">CATEGORY</span>
        </div>
      </div>
      {/* <!-- Row 2 --> */}
      <div className="card-body-row">
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">Montenegro</span>
          </div>
          <span className="text-[12px]">CITY</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">Male</span>
          </div>
          <span className="text-[12px]">GENDER</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">24 Months</span>
          </div>
          <span className="text-[12px]">MIN EXPERIENCE</span>
        </div>
      </div>
      <div className="card-body-row">
        <div className="   card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">SwitZerland</span>
          </div>
          <span className="text-[12px]">NATIVE LANGUAGE</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">$ 12.00 Hour</span>
          </div>
          <span className="text-[12px]">MINIMUM SALARY</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">
              8:00 AM GMT +2
            </span>
          </div>
          <span className="text-[12px]">STARTING HOURS</span>
        </div>
      </div>
      <div className="card-body-row">
        <div className="   card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">In Person</span>
          </div>
          <span className="text-[12px]">CONTRACT TYPE</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">$ 24.00 Hour</span>
          </div>
          <span className="text-[12px]">MAXIMUM SALARY</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            {/* <div>
              <img src={swiss} alt="logo" />
            </div> */}
            <span className="text-secondarytext text-[14px]">
              17:00 PM GMT +2
            </span>
          </div>
          <span className="text-[12px]">ENDING HOURS</span>
        </div>
      </div>
      <div className="card-body-row">
        <div className="   card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">Montenegro</span>
          </div>
          <span className="text-[12px]">REQUIRED SKILLS</span>
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">Montenegro</span>
          </div>
          {/* <span className="text-[12px]">COUNTRY</span> */}
        </div>{" "}
        <div className="card-body-line"></div>
        <div className=" card-body-row-item ">
          <div className="flex items-center gap-[8px]">
            <div>
              <img src={swiss} alt="logo" />
            </div>
            <span className="text-secondarytext text-[14px]">Montenegro</span>
          </div>
          {/* <span className="text-[12px]">COUNTRY</span> */}
        </div>
      </div>
    </div>
  );
};
