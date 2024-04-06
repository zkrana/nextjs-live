import React from "react";
import "../globals.css";
import Sidebar from "../ui/dashboard/Sidebar";

function layout({ children }) {
  return (
    <div className="flex w-full justify-between">
      <Sidebar width="customWidth" />
      <div className="w-[calc(100%-400px)] p-4">{children}</div>
    </div>
  );
}

export default layout;
