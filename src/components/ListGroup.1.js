export function ListGroup() {
  const items = ["ash", "aps", "ban", "sye"];
  return (
    <>
      <h1>List Group</h1>
      <ul class="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      ;
    </>
  );
}
