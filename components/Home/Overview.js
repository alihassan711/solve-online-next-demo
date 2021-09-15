import React, { Fragment } from 'react';

export default function Overview() {
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-2 col-lg-2">
                <h2 className="heading-page">Overview</h2>
            </div>
                <div className="col-md-10 col-lg-10">
                <span style={{float: 'right'}}>1 of 4 Completed</span>
            </div>
            </div>
            <div className="row mt-4 div_background_set">
                <div className="col-md-12 col-lg-12">
                <div id="tracking-pre" />
                <div id="tracking">
                    <div className="tracking-list">
                    <div className="tracking-item">
                        <div className="tracking-icon status-intransit">
                        <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                        </svg>
                        {/* <i class="fas fa-circle"></i> */}
                        </div>
                        {/* <div class="tracking-date">Aug 10, 2018<span>05:01 PM</span></div> */}
                        <div className="tracking-content">DESTROYEDPER SHIPPER INSTRUCTION<span>KUALA LUMPUR (LOGISTICS HUB), MALAYSIA, MALAYSIA</span></div>
                    </div>
                    <div className="tracking-item">
                        <div className="tracking-icon status-intransit">
                        <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                        </svg>
                        {/* <i class="fas fa-circle"></i> */}
                        </div>
                        {/* <div class="tracking-date">Aug 10, 2018<span>11:19 AM</span></div> */}
                        <div className="tracking-content">SHIPMENT DELAYSHIPPER INSTRUCTION TO DESTROY<span>SHENZHEN, CHINA, PEOPLE REPUBLIC</span></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
