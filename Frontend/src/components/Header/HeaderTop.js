import React, { useState } from "react";

export const Search = (props) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <div
      className={`${props.classes} relative h-10 rounded-lg ${
        focusInput ? "outline outline-5 outline-offset-0 outline-outline" : ""
      } `}
    >
      <select
        name="e-commerce"
        className="cursor-pointer rounded-l-lg p-2 px-4 text-gray-500  focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline"
      >
        <option value="">All Categories</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish </option>
      </select>
      <input
        type="text"
        className="w-full rounded-r-lg  px-4 text-secondary text-opacity-70 focus:outline-none"
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
      />
      <button
        className={`${props.classesBtn} customIcon focus:outline-outline" absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3 focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline`}
      >
        <ion-icon name="search-outline" style={{ color: "#232f3e" }}></ion-icon>
      </button>
    </div>
  );
};

const HeaderTop = () => {
  return (
    <div
      className="flex items-center
     justify-between gap-12 py-2"
    >
      <div className="customIcon flex  gap-6  lg:hidden">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div className="text-white">
        <h2 className="own-class  text-2xl lg:text-3xl">CareoCity</h2>
        <p className="text-xs opacity-80">Quality Fun Shopping</p>
      </div>
      <Search classes={"hidden   grow  lg:flex "} classesBtn={"hi"} />

      <nav>
        <ul className="hidden list-none items-center  gap-6 lg:flex">
          <li className="cursor-pointer text-white">Login& Register</li>
          <li className="cursor-pointer text-white">More</li>
          <li className="styles.customI cursor-pointer text-white">
            <ion-icon name="cart-outline"></ion-icon>
          </li>
        </ul>
        <div className="customIcon flex gap-4 lg:hidden">
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;

// import React, { useState } from "react";

// const HeaderTop = () => {
//   const [focusInput, setFocusInput] = useState(false);

//   return (
//     <div
//       className="flex items-center
//      justify-between gap-12 py-2"
//     >
//       <div className="customIcon flex  gap-6  lg:hidden">
//         <ion-icon name="menu-outline"></ion-icon>
//         <ion-icon name="search-outline"></ion-icon>
//       </div>
//       <div className="text-white">
//         <h2 className="own-class  text-2xl lg:text-3xl">CareoCity</h2>
//         <p className="text-xs opacity-80">Quality Fun Shopping</p>
//       </div>
//       <div
//         className={`relative hidden h-10 grow  rounded-lg ${
//           focusInput ? "outline outline-5 outline-offset-1 outline-outline" : ""
//         } lg:flex`}
//       >
//         <select
//           name="e-commerce"
//           className="cursor-pointer rounded-l-lg p-2 px-4 text-gray-500  focus:outline focus:outline-5 focus:outline-offset-1 focus:outline-outline"
//         >
//           <option value="">All Categories</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//           <option value="hamster">Hamster</option>
//           <option value="parrot">Parrot</option>
//           <option value="spider">Spider</option>
//           <option value="goldfish">Goldfish </option>
//         </select>
//         <input
//           type="text"
//           className="w-full rounded-r-lg px-4 focus:outline-none"
//           onFocus={() => setFocusInput(true)}
//           onBlur={() => setFocusInput(false)}
//         />
//         <button className='customIcon focus:outline-outline" absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3 focus:outline focus:outline-6 focus:outline-offset-1 focus:outline-outline'>
//           <ion-icon
//             name="search-outline"
//             style={{ color: "#232f3e" }}
//           ></ion-icon>
//         </button>
//       </div>
//       <nav>
//         <ul className="hidden list-none items-center  gap-6 lg:flex">
//           <li className="cursor-pointer text-white">Login& Register</li>
//           <li className="cursor-pointer text-white">More</li>
//           <li className="styles.customI cursor-pointer text-white">
//             <ion-icon name="cart-outline"></ion-icon>
//           </li>
//         </ul>
//         <div className="customIcon flex gap-4 lg:hidden">
//           <ion-icon name="cart-outline"></ion-icon>
//           <ion-icon name="ellipsis-vertical-outline"></ion-icon>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default HeaderTop;
