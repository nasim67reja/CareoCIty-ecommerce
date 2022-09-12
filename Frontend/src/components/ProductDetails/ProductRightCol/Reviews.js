import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../../Ovarlay/Backdrop";
import { overlayActions } from "../../../store/ovarlay";
import ReviewOvarlay from "../../Ovarlay/ReviewOvarlay";

const Reviews = () => {
  // const product = useSelector((state) => state.allProducts.Product);
  // console.log(product);

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
          <p>No reviews yet</p>
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
      <div>2</div>
    </div>
  );
};

export default Reviews;
