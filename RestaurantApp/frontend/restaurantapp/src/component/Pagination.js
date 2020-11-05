import React from 'react';
import '../css/table.css';
const Pagination = ({ restsPerPage, totalRests, paginate }) => {
    const pageNumbers = [];

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


