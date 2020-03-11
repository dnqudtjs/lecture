import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  { id: 1, name: "aaa", image: "./aaa.jpg", rating: 3 },
  { id: 2, name: "bbb", image: "./bbb.jpg", rating: 4 },
  { id: 3, name: "ccc", image: "./ccc.jpg", rating: 5 },
  { id: 4, name: "ddd", image: "./ddd.jpg", rating: 2 }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
