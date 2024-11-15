import { Add } from "@mui/icons-material";

import React from "react";

const SidebarOptions = () => {
  return (
    <>
      <div className="flex-col gap-y-10">
        <div className="flex gap-2 my-5">
          <Add />
          <button> Create Space </button>
        </div>

        <div className=" my-1">
          <p>History</p>
        </div>

        <div className="my-1">
          <p>Business</p>
        </div>

        <div className="my-1">
          <p>Psychology</p>
        </div>

        <div className="my-1">
          <p>Cooking</p>
        </div>

        <div className="my-1">
          <p>Music</p>
        </div>

        <div className="my-1">
          <p>Science</p>
        </div>

        <div className="my-1">
          <p>Health</p>
        </div>

        <div className="my-1">
          <p>Movies</p>
        </div>

        <div className="my-1">
          <p>Technology</p>
        </div>

        <div className="my-1">
          <p>Education</p>
        </div>

        <div className="flex">
          <p className="text">Discover Spaces</p>
        </div>
      </div>
    </>
  );
};

export default SidebarOptions;
