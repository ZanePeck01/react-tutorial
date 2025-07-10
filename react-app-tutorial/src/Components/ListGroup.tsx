import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Event handler function
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group"></ul>
      {items.map((item, index) => (
        <li className="list-group-item" key={item} onClick={handleClick}>
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
