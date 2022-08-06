import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BottomNav } from "./LinksEl";

const HoverShowEl = ({ eachLink }) => {
  const [showSubLinks, setShowSubLinks] = useState(true);
  const hoverEnterHandler = (e) => {
    setShowSubLinks(true);
  };
  const hoverLeaveHandler = () => {
    // setShowSubLinks(false);
  };

  return (
    <>
      <li
        className="group flex cursor-pointer
          items-center gap-1 text-white"
        onMouseEnter={hoverEnterHandler}
        onMouseLeave={hoverLeaveHandler}
      >
        <Link to="/">{eachLink.name}</Link>
        {eachLink.sublinks && <ion-icon name="chevron-down-outline"></ion-icon>}
        {eachLink.sublinks && showSubLinks && (
          <div className="absolute top-28 mt-2  hidden gap-6 border-2 border-black text-black group-hover:flex">
            {eachLink.sublinks.map((links) => (
              <div key={Math.random()} className="group-hover:block">
                <h2 className="text-2xl font-medium">{links.title || links}</h2>
                {links.title &&
                  links.links.map((singleEl) => (
                    <Link to="/home"> {singleEl}</Link>
                  ))}
              </div>
            ))}
          </div>
        )}
      </li>
    </>
  );
};

const HeaderBottom = () => {
  return (
    <div>
      <nav className="hidden py-3 lg:block">
        <ul className="flex gap-10">
          {BottomNav.map((el) => (
            <HoverShowEl eachLink={el} key={el.name} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;
