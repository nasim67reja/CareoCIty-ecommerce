import React from "react";
import { useParams } from "react-router-dom";
import CategoryLeftColumn from "../components/Categories/CategoryLeftColumn/CategoryLeftColumn";
import CategoryRightColumn from "../components/Categories/CategoryRightColumn/CategoryRightColumn";

const Categories = () => {
  const params = useParams();
  // let content = params.categoriesId;

  return (
    <div className="mx-auto grid max-w-st grid-cols-[25%_75%] gap-10  px-16 py-12">
      <CategoryLeftColumn />
      <CategoryRightColumn params={params.categoriesId} />
    </div>
  );
};

export default Categories;
