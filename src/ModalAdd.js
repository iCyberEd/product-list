import React from 'react'

export default function ModalAdd({show, setShow}) {
  const modalAddClass = show ? "modal-add" : "modal-add_disabled"

  return (
    <div className={modalAddClass}>
      <div className="modal-content">
        <button>Add</button>
        <button onClick={ () => setShow(false)}>Cancel</button>
      </div>
    </div>
  )
}
