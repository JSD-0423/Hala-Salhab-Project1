import React from 'react'
import './Table.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function Table({ tableHead, tableRows }) {
    //extract theme 
    const { theme, toggleTheme } = useContext(ThemeContext);
    const tableClassName = theme === 'dark'
        ? 'table-dark table my-5 table-bordered w-100'
        : 'table-lightt table my-5 table-bordered w-100';

    return (
        <div className="details rounded-4">
            <div className=' overflow-x-auto'>
                <table className={tableClassName}>
                    <thead>
                        <tr className="main-head-line py-3 px-4"><th>{tableHead}</th></tr>
                    </thead>
                    <tbody>
                        {tableRows.map((row, i) => {
                            return <tr className='py-1 px-3' key={i}>
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