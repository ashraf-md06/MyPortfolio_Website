import { useState } from "react";
// interface Props {
//   items: string[];
//   heading: string;
//   function onSelectItem ((item) => void);
// }
function ListGroup({ items, heading, onSelectItem }) {
  //items = [];
  //   let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const getMsg = () => {
    return items.length === 0 && <p>No item found</p>;
  };
  //   const handleClick = (event) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {getMsg}
      <ul class="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      ;
    </>
  );
}

export default ListGroup;
