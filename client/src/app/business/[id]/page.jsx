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
        <div>
            {/*Styling on this is VERY temporary, and just for my own use. Feel free to remove and use something better. and preferable not inline - Noah*/}
            <Link href='/' className='logo' style={{color: `white`, width: `10%`}}>yiip</Link>
            <div className='details-page'>
                <h1>{business.name}</h1>
                <p>Business Name: {business.name}</p>
                <p>Business Type: {business.industry}</p>
                <p>Business Address: {business.address}</p>
                <p>Business Phone #: {business.phone}</p>
                <p>Business Hours: {business.hours}</p>
                <button onClick={deleteHandler}>Delete This Business</button>
            </div>
        </div>
    )
}

export default Business;