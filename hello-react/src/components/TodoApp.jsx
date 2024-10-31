import { useState } from "react";

const products = [
  { id: 1, title: "Yumurta", quantity: 10, completed: true },
  { id: 2, title: "Zeytin", quantity: 1, completed: true },
  { id: 3, title: "Peynir", quantity: 2, completed: true },
  { id: 4, title: "Domates", quantity: 2, completed: true },
  { id: 5, title: "Salatalık", quantity: 3, completed: false },
];

export default function TodoApp() {
  return (
    <div className="container">
      <Header />
      <Form />
      <List />
      <Summary />
    </div>
  );
}

function Header() {
  return <h1>TodoApp</h1>;
}

function Form() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const product = {
      id: Date.now(),
      title: itemName,
      quantity: quantity,
      completed: false,
    };

    console.log(product);

    handleAddItem(product);

    setItemName("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Eleman ekle"
        name="itemName"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (v, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List() {
  return (
    <ul>
      {products.map((p, index) => (
        <ListItem item={p} key={index} />
      ))}
    </ul>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {item.title} - {item.quantity}
      </span>
      <button>X</button>
    </li>
  );
}

function Summary() {
  return <div>Alışveriş sepetinizde 10 ürün bulunmaktadır.</div>;
}
