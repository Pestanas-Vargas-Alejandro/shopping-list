import { useState } from "react"

function App() {
  const [itemChecked, setItemChecked] = useState({
    first: false,
    second: false,
    third: false,
  })

const handleItemChecked = (e) => {
//   if (itemChecked[e.target.name]){
//     setItemChecked({
//       ...itemChecked,[e.target.name]: false,
//     });
//   }else {
//     setItemChecked({
//       ...itemChecked,[e.target.name]: true,
//     });
//   }

setItemChecked ({
  ...itemChecked,
  [e.target.name]: !itemChecked[e.target.name]
})
}



  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping list</h1>
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-outline-primary bi bi-plus-circle"></button>
        </div>
        <hr />
      </div>

      <div className="row">
        <div className="col">
          <input 
          checked={itemChecked.first}
          name="first"
          onClick={(e) => handleItemChecked(e)}
          type="checkbox" />
        </div>
        <div className="col-2 text-start">
          {
          itemChecked.first ? <del>1 Kg</del> : "1 Kg"
          }
          </div>
        <div className="col-5 col-md-6 text-start">
          {
          itemChecked.first ? <del>Tortillas</del> : "Tortillas"
          }
        </div>
        <div className="col-4 col-md-3 btn-group">
          <button type="button" class="btn btn-outline-warning bi bi-pencil"></button>
          <button type="button" class="btn btn-outline-secondary bbi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash-fill"></button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col-2 text-start">1 Lt</div>
        <div className="col-5 col-md-6 text-start">Aceite</div>
        <div className="col-4 col-md-3 btn-group">
          <button type="button" class="btn btn-outline-warning bi bi-pencil"></button>
          <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash-fill"></button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col-2 text-start">3 Lts</div>
        <div className="col-5 col-md-6 text-start">Refresco</div>
        <div className="col-4 col-md-3 btn-group">
          <button type="button" class="btn btn-outline-warning bi bi-pencil"></button>
          <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
          <button type="button" class="btn btn-outline-danger bi bi-trash-fill"></button>
        </div>
      </div>
    </div>
  )
}

export default App
