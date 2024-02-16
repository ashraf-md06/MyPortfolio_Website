import ListGroup from "./components/ListGroup";
function App() {
  let items = ["ash", "aps", "ban", "sye"];
  const handleSelectItem = (items) => {
    console.log(items);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="names"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
