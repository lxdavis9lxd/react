function ListGroup() {
  const items = ['New York', 'Los Angeles', 'Chicago'];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ListGroup;