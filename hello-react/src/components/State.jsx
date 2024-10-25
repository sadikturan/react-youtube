import { useState } from "react";
import { pizzas } from "../data.js";

export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);

  let pizza = pizzas[index];

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pizzas.length - 1);
    }
  }

  function handleNextClick() {
    if (index < pizzas.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-2" onClick={handlePreviousClick}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={handleNextClick}>
        Next
      </button>

      <div className="card" style={{ width: "400px" }}>
        <img
          src={"/img/" + pizza.image}
          alt=""
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h2 className="card-title">
            {pizza.title}{" "}
            <button className="btn btn-link p-0" onClick={handleMoreClick}>
              {showMore ? (
                <i className="bi bi-caret-up-fill"></i>
              ) : (
                <i className="bi bi-caret-down-fill"></i>
              )}
            </button>
          </h2>

          {showMore && <p className="card-text">{pizza.description}</p>}
          <span
            className={`badge ${
              pizza.price <= 200 ? "text-bg-danger" : "text-bg-primary"
            }`}
          >
            {pizza.price} TL
          </span>
        </div>
      </div>
    </div>
  );
}
