import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../../App";
import { LoadingText } from "../../Reuse/Loading";
import { truncateString } from "../../Reuse/Product";

const RatingsReviews = () => {
  const curUser = useSelector((state) => state.user.user);

  const formatDate = (date) => {
    const newDate = new Date(date || Date.now());
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const local = navigator.language;
    const formateDate = new Intl.DateTimeFormat(local, options).format(newDate);
    return formateDate;
  };

  return (
    <div className="flex  items-center justify-center rounded-sm bg-white p-4 shadow-lg">
      {!curUser && <LoadingText height="20" width="20" />}
      {curUser && (
        <>
          {curUser.data.data.orders.length < 1 ? (
            <div>You have not ordered any Product</div>
          ) : (
            <div className="grid w-full grid-cols-[20%_30%_20%_15%_15%] gap-y-8 text-sm">
              <h3 className="text-base font-semibold">Tracking ID</h3>
              <h3 className="text-base font-semibold">Product</h3>
              <h3 className="text-base font-semibold">Date </h3>
              <h3 className="text-base font-semibold">Amount </h3>
              <h3 className="text-base font-semibold ">Status </h3>
              {curUser.data.data.orders.map((el, i) => (
                <Fragment key={i}>
                  <div className="flex items-center">
                    {truncateString(el._id, 17)}
                  </div>
                  <Link
                    className="flex cursor-pointer items-center gap-2 "
                    to={`/${el.product.categories}/${el.product.name}`}
                  >
                    <span className="inline-block w-[20%]">
                      <img
                        className="w-full rounded-[50%]"
                        src={`${URL}/Products/${el.product.categories}/${el.product.images[1]}`}
                        alt="product_image"
                        crossOrigin="anonymous"
                      />
                    </span>
                    <span>{truncateString(el.product.name, 22)}</span>
                  </Link>
                  <div className="flex items-center">
                    {formatDate(el.createdAt)}
                  </div>
                  <div className="flex items-center">{el.price}</div>
                  <div className="flex items-center">
                    <span
                      className={`${
                        el.status === "pending"
                          ? "bg-[rgba(189,189,3,.103)] text-[#daa520]"
                          : "bg-[rgba(0,128,0,.151)] text-green-700"
                      } rounded-md py-1 px-2`}
                    >
                      {el.status}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RatingsReviews;
