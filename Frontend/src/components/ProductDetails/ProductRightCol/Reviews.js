import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../../Ovarlay/Backdrop";
import { overlayActions } from "../../../store/ovarlay";
import ReviewOvarlay from "../../Ovarlay/ReviewOvarlay";
import RatingStar from "../../Reuse/RatingStar";

const Reviews = () => {
  const product = useSelector((state) => state.allProducts.Product);

  const dispatch = useDispatch();
  const writeReviewHandler = () => {
    dispatch(overlayActions.backdropVisible());
    dispatch(overlayActions.reviewOvarlayIsVisible());
  };
  return (
    <div>
      <div
        className="mb-6 border-b
      border-customBorder pb-6"
      >
        <h2 className="mb-6 text-xl text-[#343]">Customer Reviews</h2>
        <div className="flex justify-between">
          {product && product.ratingsQuantity ? (
            <div className="flex gap-2 text-orange-400">
              <span>
                <RatingStar rating={product.ratingsAverage} />
              </span>
              <span>based on {product.ratingsQuantity} review</span>
            </div>
          ) : (
            <p>No reviews yet</p>
          )}
          <button onClick={writeReviewHandler}> Write a review</button>
          {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}
          {ReactDOM.createPortal(
            <ReviewOvarlay />,
            document.getElementById("overlay-root")
          )}
        </div>
      </div>
      {product?.reviews &&
        product.reviews.map((review, i) => (
          <div
            key={i}
            className="grid grid-cols-[8%_80%] gap-4 border-b border-customBorder py-4 lg:grid-cols-[6%_80%] xl:grid-cols-[5%_80%]"
          >
            <div className="h-12 w-12">
              {review.user.photo ? (
                <img
                  src={review.user.photo}
                  alt="user-pic"
                  crossOrigin="anonymous"
                  className="rounded-full"
                />
              ) : (
                <div className="flex h-12 items-center justify-center rounded-full bg-secondary font-bold tracking-widest text-white">
                  <p>
                    {review.user.name
                      .split(" ")
                      .map((el) => el[0])
                      .join("")}
                  </p>
                </div>
              )}
            </div>
            <div>
              <h3 className="mb-1 text-base text-[#333]">{review.user.name}</h3>
              <RatingStar rating={review.rating} />
              <p className="mt-6 text-sm">{review.review}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
