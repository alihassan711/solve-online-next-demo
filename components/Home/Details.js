import React, { Fragment } from 'react'

export default function Details() {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <h2 className="heading-page mt-4">Detail</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-lg-3 detail_available_price mt-4">
                    <i className="fa fa-cog" /><span className="ml-2 avail_price">Available Price: </span> <span className="ml-4">$50</span>
                </div>
                </div>
                <div className="row mt-3">
                <div className="col-md-3 col-lg-3 detail_available_price">
                    <i className="fa fa-cog" /><span className="ml-2 avail_price">Budget: </span> <span className="ml-4">$50</span>
                </div>
                </div>
                <div className="row mt-5">
                <div className="col-md-12 col-lg-12">
                    <button className="btn btn-primary">Adjust Budget</button>
                </div>
            </div>
        </Fragment>
    )
}
