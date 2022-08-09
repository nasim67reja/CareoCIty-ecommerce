import React, { useState } from "react";
import { BottomNav } from "./LinksEl";
import { Sublink, SublinkContact, WrapperLi } from "./HeaderBottom";
import { Search } from "./HeaderTop";

const MobileHeader = () => {
  const [openContact, setOpenContact] = useState(false);
  const [idNum, setIdNum] = useState("");

  const [navOpen, setNavOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {navOpen || searchOpen ? (
        <div>
          <div
            className="absolute top-0 left-0 h-screen w-[98vw] bg-ovarlay"
            onClick={() => {
              setNavOpen(false);
              setSearchOpen(false);
            }}
          ></div>

          <div className="scroller  ani absolute top-0  h-screen w-[50%] overflow-y-auto bg-white shadow-xl">
            {searchOpen && (
              <div className="p-2">
                <span
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={() => setSearchOpen(false)}
                >
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </span>
                <Search classes={"flex mt-20 border-2 "} />
              </div>
            )}
            {navOpen && (
              <>
                <h2 className="relative flex  items-center gap-6 bg-secondary p-6 text-white">
                  <span>
                    <ion-icon
                      name="person-circle-outline"
                      size="large"
                    ></ion-icon>
                  </span>
                  <span> Hi, Nasim Reja</span>
                  <span
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setNavOpen(false)}
                  >
                    <ion-icon name="close-outline" size="large"></ion-icon>
                  </span>
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
                          classN={`${
                            openContact && idNum === i ? "" : "hidden"
                          }`}
                        />
                      </WrapperLi>
                    ))}
                  </ul>
                </nav>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
