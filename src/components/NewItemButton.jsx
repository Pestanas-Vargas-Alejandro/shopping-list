import React from 'react'
import Swal from 'sweetalert2'

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
        setListItems ([
            ...listItems,
            {
                id: listItems.length + 1,
                ...value,
                checked: false,
            }
        ])

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