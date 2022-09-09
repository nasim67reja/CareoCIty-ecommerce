import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const CateHeader = () => {
  let gridIsActive = true;

  let [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const gridViewHandler = () => {
    gridIsActive = true;

    if (searchParams.getAll("view").includes("grid")) return;
    navigate(
      `${location.pathname}${
        location.search && !searchParams.get("view")
          ? location.search + "&"
          : "?"
      }view=grid`
    );
  };

  const listViewHandler = () => {
    gridIsActive = false;

    if (searchParams.getAll("view").includes("list")) return;
    navigate(
      `${location.pathname}${
        location.search && !searchParams.get("view")
          ? location.search + "&"
          : "?"
      }view=list`
    );
  };

  if (searchParams.get("view") === "list") gridIsActive = false;

  const filterHandler = () => {
    if (searchParams.get("filter")) return;
    navigate(
      `${location.pathname}${
        location.search ? location.search + "&" : "?"
      }filter=asc`
    );
  };

  return (
    <div className="mb-8 flex justify-between px-8">
      <div className="flex gap-2">
        <span
          className={`category flex cursor-pointer items-center justify-center rounded-sm  p-2 ${
            gridIsActive ? "bg-blue-600 text-white" : "border border-orange-400"
          }`}
          onClick={gridViewHandler}
        >
          <ion-icon name="grid-outline"></ion-icon>
        </span>
        <span
          className={`category flex cursor-pointer items-center  justify-center rounded-sm p-2 ${
            !gridIsActive
              ? "bg-blue-600 text-white"
              : "border border-orange-400"
          }`}
          onClick={listViewHandler}
        >
          <ion-icon name="list-outline" size="large"></ion-icon>
        </span>
      </div>
      <div>
        <button className="bg-white" onClick={filterHandler}>
          filter
        </button>
      </div>
    </div>
  );
};

export default CateHeader;
