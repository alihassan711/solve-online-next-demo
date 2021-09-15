import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link'


export default function Footer() {
    return (
        <Fragment>
        <div className="row mt-5">
            <div className="col-md-12 col-lg-12 mt-5">
            <Image
                loader={() => "https://business.solveonline.com/static/img/v3/logo-black-new.svg"}
                src="logo-black-new.svg"
                alt="logo"
                width={200}
                height={80}
            />
            </div>
        </div>
        <hr />
        <footer className="page-footer font-small blue">
        {/* Footer Links */}
        <div className="container-fluid text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-6 mt-md-0 mt-3">
              {/* Content */}
              {/* <h5 className="text-uppercase">Footer Content</h5> */}
              <p>Here you can use rows and columns to organize your footer content.Here you can use rows and columns to organize your footer content.Here you can use rows and columns to organize your footer content.</p>
            </div>
            {/* Grid column */}
            <hr className="clearfix w-100 d-md-none pb-3" />
            {/* Grid column */}
            <div className="col-md-2 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-uppercase my-load-email">Account</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/"><a className="my-load-email">Profile</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Setting</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Billing</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Notifications</a></Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-uppercase my-load-email">About</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/"><a className="my-load-email">Services</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Pricing</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Contact</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Careers</a></Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-uppercase my-load-email">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/"><a className="my-load-email">Connectivity</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Help Center</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="my-load-email">Support</a></Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}
        {/* Copyright */}
        <div className="footer-copyright text-left py-3">© 2020 Copyright:
          <a href="https://mdbootstrap.com/"> SolveOnline For Business.com</a>
        </div>
        {/* Copyright */}
      </footer>
      </Fragment>
    )
}
