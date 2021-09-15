import React from 'react';
import Link from 'next/link';

export default function Breadcums() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                <li className="breadcrumb-item"><Link href="/">Library</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    )
}
