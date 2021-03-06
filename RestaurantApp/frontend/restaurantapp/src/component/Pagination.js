import React from 'react';
import '../css/table.css';
/**
 * Table of buttons for pagination functionality
 * @param {int} restsPerPage - restaurants to show per page
 * @param {int} totalRests - total number of restaurants 
 * @param {function} paginate - function to set page number
 */
const Pagination = ({ restsPerPage, totalRests, paginate }) => {

    const pageNumbers = [];
    //Determine number of pages needed to display data 
    for (let i = 1; i <= Math.ceil(totalRests / restsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <table id="pagination">
            <tbody>
                <tr>
                {pageNumbers.map(number => (
                    <td>
                        <button onClick={() => paginate(number)} className='paginationbutton'>
                            {number}
                        </button>
                    </td>
                   
                ))}
                </tr>
            </tbody>
        </table>
    );
};

export default Pagination;


