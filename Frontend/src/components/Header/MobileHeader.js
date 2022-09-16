import React, { useState } from "react";
import { BottomNav } from "./LinksEl";
import { Sublink, SublinkContact, WrapperLi } from "./HeaderBottom";
import { Search } from "./HeaderTop";
import { useDispatch, useSelector } from "react-redux";
import { overlayActions } from "../../store/ovarlay";

const MobileHeader = () => {
  const [openContact, setOpenContact] = useState(false);
  const [idNum, setIdNum] = useState("");

  const dispatch = useDispatch();

  const { mobileMenuIsVisible, mobileSearchMenuIsVisible } = useSelector(
    (state) => state.overlay
  );
  return (
    <>
      {mobileMenuIsVisible || mobileSearchMenuIsVisible ? (
        <div className="scroller  ani absolute top-0  z-10 h-screen w-[50%] overflow-y-auto bg-white shadow-xl">
          {mobileSearchMenuIsVisible && (
            <div className="p-2">
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() =>
                  dispatch(overlayActions.mobileSearchMenuOpenHandler())
                }
              >
                <ion-icon name="close-outline" size="large"></ion-icon>
              </span>
              <Search classes={"flex mt-20 border-2 "} />
            </div>
          )}
          {mobileMenuIsVisible && (
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
                  onClick={() =>
                    dispatch(overlayActions.mobileMenuOpenHandler())
                  }
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
                        classN={`${openContact && idNum === i ? "" : "hidden"}`}
                      />
                    </WrapperLi>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
