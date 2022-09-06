import React from "react";
import { Link, NavLink } from "react-router-dom";

const accountNav = [
  { name: "My Account", link: "profile" },
  { name: "My Order", link: "my-order" },
  { name: "My Ratings & Reviews", link: "ratings&reviews" },
  { name: "My Cart", link: "cart" },
];

const AccountNav = () => {
  return (
    <div className="flex flex-col gap-2 rounded-sm bg-white p-4 shadow-lg">
      <ul>
        {accountNav.map((link) => (
          <li
            key={link.link}
            className="mb-2 border-b-2 border-dashed border-lime-200 py-3"
          >
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
              to={`/account/${link.link}`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountNav;
