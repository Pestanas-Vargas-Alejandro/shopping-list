import React from 'react'
import Swal from 'sweetalert2'

const NewItemButton = () => {
    const newItemModal = () => {
        Swal.fire('Any fool can use a computer')
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