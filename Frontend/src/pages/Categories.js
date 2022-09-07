import React from "react";
import Electronics from "../components/Categories/Electronics";
import { useParams } from "react-router-dom";
import CategoryLeftColumn from "../components/Categories/CategoryLeftColumn/CategoryLeftColumn";
import "./categories.css";
import CategoryRightColumn from "../components/Categories/CategoryRightColumn/CategoryRightColumn";

const Categories = () => {
  const params = useParams();
  let content = params.categoriesId;
  if (params.categoriesId === "Electronics") content = <Electronics />;

  return (
    <div className="custom-grid mx-auto grid max-w-st gap-10  px-4 py-12">
      <CategoryLeftColumn />
      <CategoryRightColumn params={params.categoriesId} />
    </div>
  );
};

export default Categories;
