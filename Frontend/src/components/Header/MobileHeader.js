import React from "react";

const MobileHeader = () => {
  return (
    <div className="absolute top-0 h-screen  w-auto  bg-white shadow-lg">
      <h2 className="flex items-center gap-6 bg-secondary p-3 pr-44 text-white">
        <span>
          <ion-icon name="person-circle-outline" size="large"></ion-icon>
        </span>
        <span> Hi, Nasim Reja</span>
      </h2>
    </div>
  );
};

export default MobileHeader;
