import { pizzas } from "../data.js";

export default function Events() {
  let index = 1;
  let pizza = pizzas[index];

  function handlePreviousClick() {
    index = index - 1;
  }

  function handleNextClick() {
    index = index + 1;
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
          <h2 className="card-title">{pizza.title}</h2>
          <p className="card-text">{pizza.description}</p>
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
