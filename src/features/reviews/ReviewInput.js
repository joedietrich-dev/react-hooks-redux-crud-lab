import React, { useState } from "react";

function ReviewInput({ onReviewSubmit = (f) => f }) {
  const [comment, setComment] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(comment);
    setComment("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <input value="Add Review" type="submit" />
      </form>
    </div>
  );
}

export default ReviewInput;
