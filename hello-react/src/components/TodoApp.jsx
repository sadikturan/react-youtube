import { useState } from "react";

const products = [
  { id: 1, title: "Yumurta", quantity: 10, completed: true },
  { id: 2, title: "Zeytin", quantity: 1, completed: true },
  { id: 3, title: "Peynir", quantity: 2, completed: true },
  { id: 4, title: "Domates", quantity: 2, completed: true },
  { id: 5, title: "Salatalık", quantity: 3, completed: false },
];

export default function TodoApp() {
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container my-3">
      <div className="card">
        <Header />
        <div className="card-body">
          <Form onAddItem={handleAddItem} />
          <List
            items={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />
        </div>
        <Summary items={items} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="card-header">
      <h1 className="h3">TodoApp</h1>
    </div>
  );
}

function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();

    const product = {
      id: Date.now(),
      title: itemName,
      quantity: quantity,
      completed: false,
    };

    console.log(product);

    onAddItem(product);

    setItemName("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="Eleman ekle"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
}

function List({ items, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {items.length > 0 ? (
        <ul className="list-group mt-3">
          {items.map((p, index) => (
            <ListItem
              item={p}
              key={index}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-danger">Eleman yok</p>
      )}
    </>
  );
}

function ListItem({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={item.completed}
          onChange={() => onUpdateItem(item.id)}
        />
        <span style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item.title} - {item.quantity}
        </span>
      </div>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}

function Summary({ items }) {
  const itemsCount = items.length;
  const completedItemsCount = items.filter((i) => i.completed).length;

  return (
    <footer className="card-footer">
      {itemsCount === completedItemsCount ? (
        <p className="mb-0">😊 Alışveriş tamamlandı.</p>
      ) : (
        <p className="mb-0">
          Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount}{" "}
          tanesini aldınız.
        </p>
      )}
    </footer>
  );
}
