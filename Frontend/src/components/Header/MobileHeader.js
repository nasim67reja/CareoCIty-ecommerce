import React, { useState } from "react";
import { BottomNav } from "./LinksEl";
import { Sublink, SublinkContact, WrapperLi } from "./HeaderBottom";

const MobileHeader = () => {
  const [openContact, setOpenContact] = useState(false);
  const [idNum, setIdNum] = useState("");

  return (
    <div className="scroller absolute top-0 h-screen  w-[50%] overflow-y-auto bg-white shadow-lg">
      <h2 className="flex items-center  gap-6 bg-secondary p-6 text-white">
        <span>
          <ion-icon name="person-circle-outline" size="large"></ion-icon>
        </span>
        <span> Hi, Nasim Reja</span>
      </h2>
      <nav>
        <ul className="flex flex-col gap-2 px-4 py-8">
          {BottomNav.map((parentLink, i) => (
            <WrapperLi
              key={i}
              id={i}
              parentLink={parentLink}
              onGet={[setOpenContact, openContact]}
              onTest={setIdNum}
              classCustom={`justify-between hover:bg-red-50 px-4 rounded-lg py-2`}
              classLink={"font-semibold text-xl"}
            >
              <Sublink
                parentLink={parentLink}
                classSub={`grid grid-cols-1 ${
                  openContact && idNum === i ? "" : "hidden"
                }`}
              />
              <SublinkContact
                parentLink={parentLink}
                classN={`${openContact && idNum === i ? "" : "hidden"}`}
              />
            </WrapperLi>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
