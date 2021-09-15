import React from 'react';

export default function Pagination() {
    return (
        <div className="row mt-5">
            <div className="col-md-12 col-lg-12">
                <nav aria-label="..." style={{float: 'right'}}>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                    <span className="page-link">
                        2
                        <span className="sr-only">(current)</span>
                    </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    )
}
