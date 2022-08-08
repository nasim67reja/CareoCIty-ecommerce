import React, { useState } from "react";
import { BottomNav } from "./LinksEl";
import { Sublink, SublinkContact, WrapperLi } from "./HeaderBottom";

const MobileHeader = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <div className="absolute top-0 h-screen  w-[50%] overflow-y-auto bg-white shadow-lg">
      <h2 className="flex items-center gap-6 bg-secondary p-3 pr-44 text-white">
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
              parentLink={parentLink}
              onGet={[setOpenContact, openContact]}
              classCustom={
                "justify-between hover:bg-red-50 px-4 rounded-lg py-2"
              }
            >
              <Sublink parentLink={parentLink} classSub={"grid grid-cols-1 "} />

              <SublinkContact
                parentLink={parentLink}
                classN={`${openContact ? "custom-open" : "custom-close"}`}
              />
            </WrapperLi>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
