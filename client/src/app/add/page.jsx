'use client'

import React, { useState } from 'react';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BusinessForm from '../components/BusinessForm';
import LogoutButton from '../components/LogoutButton';

const AddPage = (props) => {

    const [ business, setBusiness ] = useState({})

    const {push} = useRouter();

    const [ errors, setErrors ] = useState({})

    const changeHandler = (e) => {
        setBusiness({ ...business, [e.target.name] : e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/business/add', business)
            .then((response) => {
                console.log(response)
                setBusiness(business)
                push(`/`)
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
                console.log(error)
            })
    }

    // const createBiz = (e) => {
    //     e.preventDefault;
    //     fetch('http://localhost:8000/api/business/add', {
    //         body: JSON.stringify(biz),
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         console.log(res);
    //         if(res.status == 201){
    //             push('/')
    //         }
    //     })
    //     .catch(err => {
    //         alert('Errors detected! Check console for message!');
    //         console.log(err);
    //     })
    // }

    return (
        <>

            <div>
                <h3>yiip</h3>
                <a href="">Map</a>
                <Link href="#">Account</Link>
                <LogoutButton />
            </div>

            <h1>New entry</h1>

<BusinessForm onSubmitProp={ submitHandler } initialIndustry='' initialName='' 
initialAddress='' initialPhone='' initialHours='' initialService='' errors={errors} />
            
        </>
    );
}

export default AddPage;
