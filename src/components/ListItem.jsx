import Swal from "sweetalert2";
import {v4 as uuidv4} from "uuid"


const ListItem = ({ item, handleItemChecked, listItems, setListItems }) => {
    const { id, name, quantity, unit, checked } = item

    const deleteListItem = () => {
        const newList = listItems.filter(item => item.id !== id);
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(newList)
    }

    const cloneListItem = () => {
        const newList = [
            ...listItems,
            {
                ...item,
                id: uuidv4(),
            }
        ];

        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems(newList);
    }   

    const editListItem = async () => {
        const { value } = await Swal.fire({
            title: "Item Information",
            html: `
            <input 
                type "text" 
                id = "name" 
                name = "name" 
                placeholder = "Name" 
                value = "${name}" 
                class = "swal2-input"
            />
            <input 
                type "text" 
                id = "quantity" 
                name = "quantity" 
                placeholder = "Quantity" 
                value = "${quantity}"  
                class = "swal2-input"
            />
            <input 
                type "text" 
                id = "unit" 
                name = "unit" 
                placeholder = "Unit" 
                value = "${unit}"  
                class = "swal2-input"
            />`,
            confirmButtonText: "Save Item",
            showCancelButton: true,
            cancelButtonText: "Discard",
            focusConfirm: false,
            preConfirm: () => {
                const name = Swal.getPopup().querySelector("#name").value;
                const quantity = Swal.getPopup().querySelector("#quantity").value;
                const unit = Swal.getPopup().querySelector("#unit").value;
                if (!name || !quantity || !unit) {
                    Swal.showValidationMessage("Please enter full information");
                }
                return { name, quantity, unit }
            }
        })

        if (!value.name || !value.quantity || !value.unit) return

        const newList = listItems.map ((item) => {
            if (item.id === id) {
                item.name = value.name
                item.quantity = value.quantity
                item.unit = value.unit

            }
            return item;
        })
        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems (newList);
    }

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
                <button type="button" onClick={editListItem} class="btn btn-outline-primary bi bi-pencil-square"></button>
                <button type="button" onClick={cloneListItem} class="btn btn-outline-secondary bi bi-files"></button>
                <button type="button" onClick={deleteListItem} class="btn btn-outline-danger bi bi-trash3"></button>
            </div>
        </div>
    )
}

export default ListItem;