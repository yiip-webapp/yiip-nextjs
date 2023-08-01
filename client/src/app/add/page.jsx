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
        e.preventDefault();
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
        
            <div>


            <div className='form-floating mb-3'>
                <form style={{padding: '25px', border: '2px solid black', margin: '10px'}} onSubmit={submitHandler}>
            <h1>Add a new business!</h1>

                    <input placeholder='Industry' type="text" name = 'industry' className='form-control' value = {business.industry} onChange={changeHandler} />
                    
                    {
                        errors.industry?
                        <p className='danger-text'>{errors.industry.message}</p> : null
                    }

                    <input placeholder='Business Name' id = 'floatingInput' type="text" name = 'name' className='form-control' value = {business.name} onChange={changeHandler} />
                    
                    {
                        errors.name?
                        <p className='danger-text'>{errors.name.message}</p> : null
                    }

                    <input placeholder='Address' id = 'floatingInput' type="text" name = 'address' className='form-control' value = {business.address} onChange={changeHandler} />
                    
                    {
                        errors.address?
                        <p className='danger-text'>{errors.address.message}</p> : null
                    }

                    <input placeholder='Phone Number' id = 'floatingInput' type="text" name = 'phone' className='form-control' value = {business.phone} onChange={changeHandler} />
                    
                    {
                        errors.phone?
                        <p className='danger-text'>{errors.phone.message}</p> : null
                    }
                    <input placeholder='Hours' id = 'floatingInput' type="text" name = 'hours' className='form-control' value = {business.hours} onChange={changeHandler} />
                    
                    {
                        errors.hours?
                        <p className='danger-text'>{errors.hours.message}</p> : null
                    }
                    <input placeholder='Service Type' id = 'floatingInput' type="text" name = 'service' className='form-control' value = {business.service} onChange={changeHandler} />
                    
                    {
                        errors.service?
                        <p className='danger-text'>{errors.service.message}</p> : null
                    }

                    <button className='form-button'>Add a new business now</button>

                </form>
            </div>
            </div>
        </div>
    );
}

export default AddPage;
