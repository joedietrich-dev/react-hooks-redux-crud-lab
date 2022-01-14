import React, { useState } from "react";

function RestaurantInput({ onRestaurantSubmit = (f) => f }) {
  const [name, setName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onRestaurantSubmit(name);
    setName("");
  };

  return (
    <div>
      Restaurant Input
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Restaurant Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Add Restaurant" />
      </form>
    </div>
  );
}

export default RestaurantInput;
