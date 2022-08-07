import { Link } from "react-router-dom";
import { BottomNav } from "./LinksEl";
import shopLayout from "../../assets/shop-layout.webp";
import pages from "../../assets/feet_1.png";
import style from "../../assets/style.jpg";

const img = [shopLayout, style, pages];

const HeaderBottom = () => {
  return (
    <div className="fixed w-full bg-secondary">
      <div className="custom-container ">
        <nav>
          <ul className="flex gap-8 xl:gap-12">
            {BottomNav.map((parentLink) => (
              <li className="group  py-2">
                <div className="flex items-center gap-2  text-white">
                  <Link to="/">{parentLink.name}</Link>
                  {parentLink.sublinks && (
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  )}
                </div>

                {parentLink.sublinks &&
                  parentLink.sublinks.map((sublink) => (
                    <div className="absolute left-[5%] mt-2 hidden  w-[90%] cursor-pointer  grid-cols-2 gap-8 rounded-b-lg bg-secondary px-8  py-4 pt-16 text-white shadow-lg group-hover:grid xl:grid-cols-4">
                      {parentLink.sublinks.map((links) => (
                        <div
                          key={Math.random()}
                          className="p-3 group-hover:block"
                        >
                          <h2 className="mb-6 border-b-[1px] border-blue-200 pb-2 text-2xl font-medium">
                            {links.title || links}
                          </h2>
                          <ul className="flex flex-col gap-4">
                            {links.title &&
                              links.links.map((singleEl) => (
                                <li className="transition-all hover:text-blue-400">
                                  <Link to="/home"> {singleEl}</Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <img src={pages} alt="img" className="w-full" />
                      </div>
                    </div>
                  ))}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBottom;
