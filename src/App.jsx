import { useState } from "react"
import ListItem from "./components/ListItem"
import NewItemButton from "./components/NewItemButton"
import ClearListButton from "./components/ClearListButton"


function App() {
  const [listItems, setListItems] = useState(
    JSON.parse (localStorage.getItem("listItems")) || []
  )

  const handleItemChecked = (e) => {
    const newList = listItems.map(item => {
      if (e.target.name === item.id) {
        item.checked = !item.checked;
      }
      return item;
    })

    localStorage.setItem("listItems", JSON.stringify(newList));
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
        listItems.length === 0 && (
          <div>
            <h3>Your list is empty...</h3>
            Please add a new item to start
          </div>
        )
      }

      {
        listItems.map((item) => (
          <ListItem
            item={item}
            handleItemChecked={handleItemChecked}
            listItems={listItems}
            setListItems={setListItems}
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