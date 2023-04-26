import { useState } from "react"
import ListItem from "./components/ListItem"
import NewItemButton from "./components/NewItemButton"
import ClearListButton from "./components/ClearListButton"


function App() {
  const [listItems, setListItems] = useState([
    {
      id: "1",
      name: "Arroz ",
      quantity: 1,
      unit: "kg",
      checked: false,
    },

    {
      id: "2",
      name: "Frijol",
      quantity: 1,
      unit: "kg",
      checked: false,
    },

    {
      id: "3",
      name: "Leche",
      quantity: 1,
      unit: "lt",
      checked: false,
    },

    {
      id: "4",
      name: "Papel Higienico",
      quantity: 2,
      unit: "pz",
      checked: false,
    },
  ])

  const handleItemChecked = (e) => {
    const newList = listItems.map(item => {
      if (e.target.name === item.id) {
        item.checked = !item.checked;
      }
      return item;
    })

    setListItems(newList);
  }


  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping List</h1>
        </div>
        <div className="col text-end mt-1">
          <ClearListButton
            listItems={listItems}
            setListItems={setListItems}
          />

          <NewItemButton
            listItems={listItems}
            setListItems={setListItems}
          />
        </div>
        <hr />
      </div>
      <hr />
      {
        listItems.map((item) => (
          <ListItem
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            unit={item.unit}
            checked={item.checked}
            handleItemChecked={handleItemChecked}
          />
        )
        )
      }
      <hr />
      <div className="row mt-4">
        <div className="col text-end">
          <ClearListButton
            listItems={listItems}
            setListItems={setListItems}
          />

          <NewItemButton
            listItems={listItems}
            setListItems={setListItems} />
        </div>
      </div>
    </div>

  )
}

export default App