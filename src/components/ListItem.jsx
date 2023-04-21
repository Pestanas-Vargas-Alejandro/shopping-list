const ListItem = ({id, name, quantity, unit, checked, handleItemChecked}) => {
    return (
        <div className="row mt-4">
            <div className="col">
                <input
                    checked={checked}
                    name={id}   
                    onClick={(e) => handleItemChecked(e)}
                    type="checkbox" />
            </div>
            <div className="col">
                {
                    checked ? <del>{`${quantity} ${unit}`}</del> : `${unit}`
                }
            </div>
            <div className="col-6 col-md-8" style={{ textDecoration: checked && "line-through" }}>{name}</div>
            <div className="col-5 col-md-3 btn-group" role="group">
                <button type="button" class="btn btn-outline-primary bi bi-pencil-square"></button>
                <button type="button" class="btn btn-outline-secondary bi bi-files"></button>
                <button type="button" class="btn btn-outline-danger bi bi-trash3"></button>
            </div>
        </div>
    )
}

export default ListItem;