import React from 'react'
import Link from 'next/link'

export default function SubHeader() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark ch_header">
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <div><Link href="/"><a className="nav-item nav-link header_second active">Overview</a></Link></div>
                <div><Link href="/"><a className="nav-item nav-link header_second active">Recommendation</a></Link></div>
                <div><Link href="/"><a className="nav-item nav-link header_second active">My Lead</a></Link></div>
                <div><Link href="/"><a className="nav-item nav-link header_second active">Preference</a></Link></div>
            </div>
            </div>
        </nav>
    )
}
