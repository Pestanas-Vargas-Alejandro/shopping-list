function App() {

  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col text-start">
          <h1>Shopping list</h1>
          <hr />
        </div>
        <div className="col text-end">
          <button type="button" class="btn btn-outline-primary bi bi-database-add"></button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input type="checkbox" />
        </div>
        <div className="col-2 text-start">1 Kg</div>
        <div className="col-5 col-md-6 text-start">Tortillas</div>
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
