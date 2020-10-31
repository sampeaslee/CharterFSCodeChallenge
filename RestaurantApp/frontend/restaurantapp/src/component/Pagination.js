import React from 'react';

const Pagination = ({ restsPerPage, totalRests, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRests / restsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <table id="simple-board">
            <tbody>
                <tr>
                {pageNumbers.map(number => (
                    <td>
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </td>
                   
                ))}
                </tr>
            </tbody>
        </table>
    );
};

export default Pagination;


