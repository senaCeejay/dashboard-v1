import React from "react";

const Searchbar = ({ activeSidebar }) => {
  return (
    <div>
      <input
        type={"search"}
        placeholder="Search"
        className={`text-base bg-transparent w-full placeholder-white text-white outline-none ${
          !activeSidebar && "hidden"
        }`}
      />
    </div>
  );
};

export default Searchbar;
