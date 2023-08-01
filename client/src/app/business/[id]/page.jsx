'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Business({ params }) {

    const {push} = useRouter();

    const [ business, setBusiness ] = useState({})

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/business/${params.id}`)
            .then((response) => {
                console.log(response)
                alert('This business has been deleted from the database.')
                push('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/business/${params.id}`)
            .then((response) => {
                console.log(response)
                setBusiness(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className = 'body-div'>

<div className='nav-bar'>
				<div className='nav-bar-component'>
                <Link href = '/'><h1>yiip</h1></Link>
					{/*Add map route later*/}
					<Link href="#">Map</Link>
					{/*Didn't quite understand this part, ask for elaboration later.*/}
					<Link href="#">I'm feeling lucky</Link>
                    <Link href="/add">Make a Business</Link>
				</div>

				<div className='nav-bar-component'>
					{/*Not totally sure what this button does yet?*/}
					<Link href="#">About</Link>
					{/*Made this into one button, since our login/register page is all in one.*/}
					<Link href="/welcome" className='sign-up-btn'>Sign up/Login</Link>
				</div>
			</div>
            <div className='details-page'>
                <h1>{business.name}</h1>
                <p>Business Name: {business.name}</p>
                <p>Business Type: {business.industry}</p>
                <p>Business Address: {business.address}</p>
                <p>Business Phone #: {business.phone}</p>
                <p>Business Hours: {business.hours}</p>
                <button onClick={deleteHandler}>Delete This Business</button>
                <p><Link href={`/edit/${business._id}`}>Edit This Business</Link></p>
            </div>
        </div>
    )
}

export default Business;