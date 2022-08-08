import { Link } from "react-router-dom";
import { BottomNav } from "./LinksEl";

export const WrapperLi = (props) => {
  const listClickHandler = () => {
    if (props.onGet) props.onGet[0](!props.onGet[1]);
  };

  return (
    <li className="group cursor-pointer  ">
      <div
        className={`flex items-center gap-2 py-2 ${props.classCustom}`}
        onClick={listClickHandler}
      >
        <Link to="/home">{props.parentLink.name}</Link>
        {props.parentLink.sublinkArr || props.parentLink.sublinks ? (
          <ion-icon name="chevron-down-outline"></ion-icon>
        ) : (
          ""
        )}
      </div>
      {props.children}
    </li>
  );
};

export const Sublink = ({ parentLink, classSub }) => {
  return (
    <>
      {parentLink.sublinks && (
        <div className={`text-black transition-all duration-1000  ${classSub}`}>
          {parentLink.sublinks.map((links, i) => (
            <div key={i} className="p-3 group-hover:block">
              <h2 className="mb-6 border-b-[1px] border-blue-200 pb-2 text-2xl font-medium">
                {links.title || links}
              </h2>
              <ul className="flex flex-col gap-4">
                {links.title &&
                  links.links.map((singleEl, i) => (
                    <li key={i} className="transition-all hover:text-blue-400">
                      <Link to="/home"> {singleEl}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {parentLink.image && (
            <div className="relative">
              <img src={parentLink.image.location} alt={parentLink.image.alt} />
              {parentLink.extrainfo && (
                <div className="absolute top-[30%] left-[5%] text-secondary">
                  <p>{parentLink.extrainfo.heading}</p>
                  <p className="my-4 text-2xl">{parentLink.extrainfo.title}</p>
                  <Link
                    to="/"
                    className="cursor-pointer rounded-md border-none bg-secondary px-4 py-2 text-white transition-all hover:bg-white hover:text-secondary"
                  >
                    SHOP NOW
                  </Link>
                </div>
              )}
            </div>
          )}
          {/* Blog */}
          {parentLink.blog &&
            parentLink.blog.map((eachBl, i) => (
              <div key={i}>
                <img
                  src={eachBl.img}
                  alt={eachBl.alt}
                  className="mb-3 w-full"
                />
                <h3 className="font-medium"> {eachBl.title}</h3>
                <div className="my-1 flex gap-6 text-[14px]">
                  <p>
                    <span className="mr-[0.5px]"> By </span>
                    <Link to="/" className="text-blue-700">
                      {eachBl.author}
                    </Link>
                  </p>
                  <p className="text-[0.9rem]">{eachBl.date}</p>
                </div>
                <div className="mb-4">{eachBl.description}</div>
                <div className="hover:text-blue-700">
                  <Link to="/">Read moer</Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export const SublinkContact = ({ parentLink, classN }) => {
  return (
    <>
      {parentLink.sublinkArr && (
        <div className={` rounded-b-lg ${classN} `}>
          <ul className="flex flex-col gap-2  p-6">
            {parentLink.sublinkArr.map((contactLink, i) => (
              <li key={i}>
                <Link to="/home" className="hover:text-blue-700">
                  {contactLink}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const HeaderBottom = () => {
  return (
    <div className="fixed w-full bg-secondary">
      <div className="custom-container ">
        <nav>
          <ul className="flex gap-8 xl:gap-12">
            {BottomNav.map((parentLink, i) => (
              <WrapperLi
                key={i}
                parentLink={parentLink}
                classCustom={"text-white"}
              >
                <Sublink
                  parentLink={parentLink}
                  classSub={
                    "absolute left-[5%] grid-cols-2 w-[90%] gap-8 rounded-b-lg cursor-pointer shadow-lg px-8 py-4 pt-12 group-hover:grid xl:grid-cols-4 hidden"
                  }
                />

                <SublinkContact
                  parentLink={parentLink}
                  classN={"hidden absolute group-hover:block shadow-lg"}
                />
              </WrapperLi>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBottom;

// import { Link } from "react-router-dom";
// import { BottomNav } from "./LinksEl";

// const WrapperLi = (props) => {
//   return <div className="border-2">{props.children}</div>;
// };

// const HeaderBottom = () => {
//   return (
//     <div className="fixed w-full bg-secondary">
//       <div className="custom-container ">
//         <nav>
//           <ul className="flex gap-8 xl:gap-12">
//             {BottomNav.map((parentLink) => (
//               <li key={Math.random()} className="group  py-2">
//                 <div className="flex items-center gap-2  text-white">
//                   <Link to="/">{parentLink.name}</Link>
//                   {parentLink.sublinkArr || parentLink.sublinks ? (
//                     <ion-icon name="chevron-down-outline"></ion-icon>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 {parentLink.sublinks && (
//                   <div className="absolute left-[5%] mt-2 hidden  w-[90%] cursor-pointer  grid-cols-2 gap-8 rounded-b-lg  px-8  py-4 pt-16 text-black shadow-lg transition-all duration-1000 group-hover:grid xl:grid-cols-4">
//                     {parentLink.sublinks.map((links) => (
//                       <div
//                         key={Math.random()}
//                         className="p-3 group-hover:block"
//                       >
//                         <h2 className="mb-6 border-b-[1px] border-blue-200 pb-2 text-2xl font-medium">
//                           {links.title || links}
//                         </h2>
//                         <ul className="flex flex-col gap-4">
//                           {links.title &&
//                             links.links.map((singleEl) => (
//                               <li
//                                 key={Math.random()}
//                                 className="transition-all hover:text-blue-400"
//                               >
//                                 <Link to="/home"> {singleEl}</Link>
//                               </li>
//                             ))}
//                         </ul>
//                       </div>
//                     ))}
//                     {parentLink.image && (
//                       <div className="relative">
//                         <img
//                           src={parentLink.image.location}
//                           alt={parentLink.image.alt}
//                         />
//                         {parentLink.extrainfo && (
//                           <div className="absolute top-[30%] left-[5%] text-secondary">
//                             <p>{parentLink.extrainfo.heading}</p>
//                             <p className="my-4 text-2xl">
//                               {parentLink.extrainfo.title}
//                             </p>
//                             <Link
//                               to="/"
//                               className="cursor-pointer rounded-md border-none bg-secondary px-4 py-2 text-white transition-all hover:bg-white hover:text-secondary"
//                             >
//                               SHOP NOW
//                             </Link>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                     {/* Blog */}
//                     {parentLink.blog &&
//                       parentLink.blog.map((eachBl) => (
//                         <div key={Math.random()}>
//                           <img
//                             src={eachBl.img}
//                             alt={eachBl.alt}
//                             className="mb-3 w-full"
//                           />
//                           <h3 className="font-medium"> {eachBl.title}</h3>
//                           <div className="my-1 flex gap-6 text-[14px]">
//                             <p>
//                               <span className="mr-[0.5px]"> By </span>
//                               <Link to="/" className="text-blue-700">
//                                 {eachBl.author}
//                               </Link>
//                             </p>
//                             <p className="text-[0.9rem]">{eachBl.date}</p>
//                           </div>
//                           <div className="mb-4">{eachBl.description}</div>
//                           <div className="hover:text-blue-700">
//                             <Link to="/">Read moer</Link>
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 )}
//                 {parentLink.sublinkArr && (
//                   <div className="absolute hidden rounded-b-lg shadow-lg group-hover:block">
//                     <ul className="flex flex-col gap-2  p-6">
//                       {parentLink.sublinkArr.map((contactLink) => (
//                         <li className="hover:text-blue-700">
//                           <Link to="/home">{contactLink}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default HeaderBottom;
