import Pizza from "./Pizza";

export default function PizzaList() {
    const pizzas = [
      {
        title: "Sucuklu Pizza",
        description: "Süper nefis pizza",
        image: "pizza1.jpg",
        price: 200,
        is_active: true
      },
      {
        title: "Karışık Pizza",
        description: "Süper nefis pizza",
        image: "pizza2.jpg",
        price: 300,
        is_active: true
      },
      {
        title: "Acılı Pizza",
        description: "Süper nefis pizza",
        image: "pizza3.jpg",
        price: 400,
        is_active: false
      },
      {
        title: "Ekstra Acılı Pizza",
        description: "Süper nefis pizza",
        image: "pizza4.jpg",
        price: 450,
        is_active: true
      }
    ];

    return (
      <div className='pizza-list'>
        <h2>Pizza List</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {
          (pizzas.length > 0) ? (
            pizzas.map((p, index) => (
              <Pizza pizzaObj={ p } key={index} />
            ))
          )
          :<p>ürün yok</p>          
        }
        </div>
      </div>
    );
  }