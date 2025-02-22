import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantsContainer() {
  const restaurants = useSelector((state) => state.restaurants.entities);
  const dispatch = useDispatch();
  const handleRestaurantSubmit = (restaurant) => {
    dispatch(restaurantAdded(restaurant));
  };
  return (
    <div>
      <RestaurantInput onRestaurantSubmit={handleRestaurantSubmit} />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

export default RestaurantsContainer;
