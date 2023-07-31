'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <Link href="/">
                <img src='yiip-logo.png' />
            </Link>
            <Link href="/add">Add a new business</Link>
        </>
    )
}