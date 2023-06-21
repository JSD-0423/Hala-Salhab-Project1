import React from 'react'
import './Table.css'
function Table({tableHead,tableRows}) {
    return (
        <div className="details rounded-4">
            <div className=' overflow-x-auto'>
                <table className="table my-5 table-bordered w-100">
                    <thead>
                        <tr className="main-head-line py-3 px-4"><th>{tableHead}</th></tr>
                    </thead>
                    <tbody>
                        {tableRows.map((row)=>{
                            return <tr className='py-1 px-3'>
                            <td><ion-icon name="checkmark-circle-outline"></ion-icon> <span>{row}</span></td>
                        </tr>
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table