function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
