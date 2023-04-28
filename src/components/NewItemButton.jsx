import React from 'react'
import Swal from 'sweetalert2'
import {v4 as uuidv4} from "uuid"


const NewItemButton = ({listItems , setListItems}) => {
    const newItemModal = async () => {
        const {value} = await Swal.fire({
            title: "New Item Information",
            html:`
            <input type "text" id = "name" name = "name" placeholder = "Name" class = "swal2-input"/>
            <input type "text" id = "quantity" name = "quantity" placeholder = "Quantity" class = "swal2-input"/>
            <input type "text" id = "unit" name = "unit" placeholder = "Unit" class = "swal2-input"/>`,
            confirmButtonText : "Add Item",
            showCancelButton : true,
            cancelButtonText : "Dismiss", 
            focusConfirm : false,
            preConfirm : () => {
                const name = Swal.getPopup().querySelector("#name").value;
                const quantity = Swal.getPopup().querySelector("#quantity").value;
                const unit = Swal.getPopup().querySelector("#unit").value;
                if (!name || !quantity || !unit) {
                    Swal.showValidationMessage("Please enter full information");
                }
                return {name, quantity,unit}
            }
        })

        if (!value.name || !value.quantity || !value.unit ) return

        const newList = [
            ...listItems,
            {
                id: uuidv4 (),
                ...value,
                checked: false,
            }
        ]

        localStorage.setItem("listItems", JSON.stringify(newList));
        setListItems (newList)

    }
    return (
        <button
            onClick={newItemModal}
            type="button"
            className="btn btn-outline-primary bi bi-plus-circle">
        </button>
    )
}

export default NewItemButton