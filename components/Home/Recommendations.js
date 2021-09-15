import React, { Fragment } from 'react'

export default function Recommendations() {
    return (
        <Fragment>
            <div className="row mt-4">
                <div className="col-md-2 col-lg-2">
                    <h2 className="heading-page">Recommendations</h2>
                    </div>
                </div>
            <div className="mt-3" style={{backgroundColor: 'white'}}>
                <div className="row">
                <div className="col-md-12 col-lg-12 mt-4 ml-4">
                    <p>pipelines with a budget set Above $150 purety lead assingments</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 col-lg-12 ml-4 mb-3">
                    <p>Increase Budget From $51 TO $150 To More</p>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
