import React, { useState } from "react";

const CateHeader = () => {
  const [gridIsActive, setGridIsActive] = useState(true);

  return (
    <div className="mb-8 flex justify-between px-4">
      <div className="flex gap-2">
        <span
          className={`category flex cursor-pointer items-center justify-center rounded-sm  p-2 ${
            gridIsActive ? "bg-blue-600 text-white" : "border border-orange-400"
          }`}
          onClick={() => setGridIsActive(true)}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </span>
        <span
          className={`category flex cursor-pointer items-center  justify-center rounded-sm p-2 ${
            !gridIsActive
              ? "bg-blue-600 text-white"
              : "border border-orange-400"
          }`}
          onClick={() => setGridIsActive(false)}
        >
          <ion-icon name="list-outline" size="large"></ion-icon>
        </span>
      </div>
      <div>2</div>
    </div>
  );
};

export default CateHeader;
