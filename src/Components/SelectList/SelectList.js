import React from 'react'

function SelectList({ label, name, id, options, handelOptionValue }) {

  const handelSelectOption = (event) => {
    const selectValue = event.target.value;
    handelOptionValue(selectValue);
  }

  return (
    <div>
      <label className="m-0">{label}</label>
      <select name={name} id={id} className="form-select border-0 p-0 m-0"
        aria-label="Default select example" onChange={handelSelectOption}>
        <option value="Default" selected id="option" className='me-0'>Default</option>
        {options ? (
          options.map((option, i) => (
            <option value={option} id="option" className="me-0 text-trancate fs-6" key={i}>{option}</option>
          ))
        ) : null}

      </select>
    </div>
  )
}

export default SelectList