

function Food(){
  const food = ["Burger", "Pizza", "Pasta", "Biryani", "Noodles"];

  return (
    <div>
      <h1>Food</h1>
      <ul>
        {food.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Food;