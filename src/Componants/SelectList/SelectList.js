import React from 'react'

function SelectList(props) {
  return (
    <div className=''>
        <label className="m-0">{props.label}</label>
    <select name={props.name} id={props.id} className="form-select border-0 p-0 m-0"
        aria-label="Default select example">
        <option value="none" selected disabled hidden id="option" className='me-0'>Default</option>
    </select>
    </div>
  )
}

export default SelectList