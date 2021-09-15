import React, { Fragment } from 'react'
import Pagination from './Pagination'
import Image from 'next/image';
import Link from 'next/link'


export default function MyLead() {
    return (
        <Fragment>
             <div className="row">
                <div className="col-md-12 col-lg-12 mt-5">
                    <h2 className="heading-page mt-4">My Leads</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12 col-lg-12 mt-3">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Open</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">In Progress</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Closed</label>
                    </div>
                </div>
                </div>
                <div className="row mt-5" style={{backgroundColor: 'white'}}>
                <div className="col-md-2 col-lg-2 mt-4">
                    <Image
                        loader={() => "https://business.solveonline.com/static/img/v3/logo-black-new.svg"}
                        src="logo-black-new.svg"
                        alt="logo"
                        width={200}
                        height={80}
                    />
                </div>
                <div className="col-md-10 col-lg-10">
                    <div className="parent">
                    <div className="child detail_profile">
                        <h3 className="heading-my-loads">John Doe</h3>
                        <span className="my-load-email">John Doe@example.com</span>
                    </div>
                    <div className="child">
                        <h3 className="heading-my-loads">John Doe</h3>
                        <span className="my-load-email">Brazil Salvador</span>
                    </div>
                    <div className="child" style={{float: 'right'}}>
                        <i className="fa fa-edit" />
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>70%</div>
                    </div>
                    <Link href="/"><a style={{float: 'right'}}> Action &gt;</a></Link>
                    </div>
                </div>
                </div>
                <div className="row mt-5" style={{backgroundColor: 'white'}}>
                <div className="col-md-2 col-lg-2 mt-4">
                    <Image
                        loader={() => "https://business.solveonline.com/static/img/v3/logo-black-new.svg"}
                        src="logo-black-new.svg"
                        alt="logo"
                        width={200}
                        height={80}
                    />
                </div>
                <div className="col-md-10 col-lg-10">
                    <div className="parent">
                    <div className="child detail_profile">
                        <h3 className="heading-my-loads">John Doe</h3>
                        <span className="my-load-email">John Doe@example.com</span>
                    </div>
                    <div className="child">
                        <h3 className="heading-my-loads">John Doe</h3>
                        <span className="my-load-email">Brazil Salvador</span>
                    </div>
                    <div className="child" style={{float: 'right'}}>
                        <i className="fa fa-edit" />
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>70%</div>
                    </div>
                    <Link href="/"><a style={{float: 'right'}}> Action &gt;</a></Link>
                    </div>
                </div>
            </div>
            <Pagination />
        </Fragment>
    )
}
