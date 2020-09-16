import React from "react";

const Sidebar = ({ header }) => {
  console.log({ header });
  return (
    <div
      className="md:h-screen p-4 cover-content"
      style={{ backgroundColor: "var(--bg-gradient)" }}
    >
      {header}
    </div>
  );
};

export default Sidebar;
