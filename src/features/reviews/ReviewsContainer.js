import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";
import { reviewAdded } from "./reviewsSlice";

function ReviewsContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.entities.filter((review) => review.restaurantId === restaurantId));
  const handleReviewSubmit = (comment) => {
    dispatch(reviewAdded({ restaurantId, comment }));
  };
  return (
    <div>
      <ReviewInput onReviewSubmit={handleReviewSubmit} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsContainer;
