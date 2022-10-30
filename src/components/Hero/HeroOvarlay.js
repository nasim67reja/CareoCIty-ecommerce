import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../App";
import Loading from "../Reuse/Loading";
import { truncateString } from "../Reuse/Product";

const HeroOvarlay = () => {
  const products = useSelector((state) => state.allProducts.allProducts);

  const Electronics =
    products &&
    products.filter((products) => products.categories === "Electronics");
  const Man =
    products && products.filter((products) => products.categories === "Man");
  const Women =
    products && products.filter((products) => products.categories === "Women");
  const Home =
    products && products.filter((products) => products.categories === "Home");

  const ovarlay = [
    {
      title: "Shop by Category",
      images: [
        {
          link: Electronics && Electronics[0].images[1],
          name: "Electronics",
        },
        { link: Man && Man[0].images[1], name: "Man" },
        { link: Women && Women[0].images[1], name: "Women" },
        { link: Home && Home[0].images[1], name: "Home" },
      ],
    },
    {
      title: "Dresses",
      images: [
        {
          link: Man && Man[1].images[1],
          name: "Winter Parka Men Windbreak",
          category: "Man",
        },
        {
          link: Man && Man[3].images[1],
          name: "Summer New Men Short",
          category: "Man",
        },
        {
          link: Women && Women[3].images[1],
          name: "Vintage Blue Totem Floral",
          category: "Women",
        },
        {
          link: Women && Women[6].images[1],
          name: "Blouse Office Ladies Long",
          category: "Women",
        },
      ],
    },
    {
      title: "Home's Product",
      images: [
        {
          link: Home && Home[1].images[1],
          name: "Shelf Wood Chrome Living Room Furniture",
          category: "Home",
        },
        {
          link: Home && Home[2].images[1],
          name: "Slipcover Sofa or Couch, Sage Green",
          category: "Home",
        },
        {
          link: Home && Home[3].images[1],
          name: "Modern Contemporary Lighting 60 In 1D",
          category: "Home",
        },
        {
          link: Home && Home[4].images[1],
          name: "Electric Kettle 1A Fast Hot",
          category: "Home",
        },
      ],
    },

    {
      title: "Electronics",
      images: [
        {
          link: Electronics && Electronics[1].images[0],
          name: "Digital Watches",
          category: "Electronics",
        },
        {
          link: Electronics && Electronics[2].images[0],
          name: "Xbox Console",
          category: "Electronics",
        },
        {
          link: Electronics && Electronics[3].images[0],
          name: "Electric Shaver Men's Razor",
          category: "Electronics",
        },
        {
          link: Electronics && Electronics[4].images[0],
          name: "Sony Vaio VGN P90HS P Series Lifestyle",
          category: "Electronics",
        },
      ],
    },
  ];

  return (
    <div className="relative top-[-20rem] z-10 mx-auto flex max-w-[110rem] justify-center gap-4 px-3 sm:gap-7 sm:px-8">
      {ovarlay.map((el, i) => (
        <div
          key={i}
          className={`flex w-[25rem] flex-col items-start justify-between bg-white py-4 px-8 ${
            i === 3 ? "hidden xl:flex" : ""
          } ${i === 2 ? "hidden lg:flex" : ""}`}
        >
          <h3 className="my-2 text-xl  font-semibold md:my-4 lg:text-2xl">
            {el.title}
          </h3>

          <div className="my-4 grid grid-cols-2 gap-6 gap-y-8    sm:my-8">
            {el.images.map((image, i) => (
              <div key={i}>
                {Man && Women && Electronics && Home ? (
                  <Link
                    to={
                      image.category
                        ? `/${image.category}/${image.name}`
                        : `${image.name}`
                    }
                    className="inline-block cursor-pointer self-end "
                  >
                    <img
                      crossOrigin="anonymous"
                      src={`${URL}/Products/${image.category || image.name}/${
                        image.link
                      }`}
                      alt={image.name}
                      className="sm:h-22 h-18 mb-2  w-24 sm:w-36"
                    />
                    <p className="text-center opacity-80">
                      {truncateString(image.name, 12)}
                    </p>
                  </Link>
                ) : (
                  <Loading classes="" height="15" width="15" />
                )}
              </div>
            ))}
          </div>
          <Link to="/Man">See more</Link>
        </div>
      ))}
    </div>
  );
};

export default HeroOvarlay;
