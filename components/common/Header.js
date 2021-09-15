import React from 'react';
import Image from 'next/image';
import Message from '../../public/email.png';
import Link from 'next/link'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-light" >
        <div style={{ borderRight: '2px solid black' }}>
            <div className="header_img">
            <Image
                loader={() => "https://business.solveonline.com/static/img/v3/logo-black-new.svg"}
                src="me.png"
                alt="Picture of the author"
                width={175}
                height={50}
            />
            </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link active ml-5">
              <Image src={Message} width={20} height={20} alt="solve online" className="mail_img" />
            </a>
            <a href="#" className="nav-item nav-link active ml-1 text-info">
              Marketing
            </a>
            <Link href="/"><a className="nav-item nav-link nav_menu active ml-5 text-info">PIPELINES</a></Link>
            <Link href="/"><a className="nav-item nav-link nav_menu active ml-5 text-info">Automation</a></Link>
          </div>
          <form className="form-inline ml-auto">
            <input type="text" className="form-control mr-sm-2" placeholder="Search" />
          </form>
            <div className="ml-5">
            <Image
                loader={() => "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"}
                src="logo_white.png"
                alt="logo"
                width={30}
                height={30}
            />
            </div>
          <ul className="nav navbar-nav">
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle text-info" data-toggle="dropdown">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
