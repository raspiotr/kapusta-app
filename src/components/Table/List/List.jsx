import React from 'react';

function List() {
    return (
    <div className="data-section">
        <table className="data-table">
            <thead>
                <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>SUM</th>
                </tr>
            </thead>
            <tbody>
                {/* Tutaj dynamicznie wstaw wiersze z danymi */}
            </tbody>
        </table>
    </div>

    )
}

export default List