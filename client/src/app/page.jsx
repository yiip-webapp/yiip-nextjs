'use client'

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios'
import { useParams} from 'react-router-dom'

function LandingPage(props) {
  // const { businesses } = props;
// const [ sortDirection , setSortDirection ] = useState('Oldest to latest');

//     const sortBusinesses = (direction) => {
//         setSortDirection(direction);
//     };


    const {id} = useParams()

    const [ businesses, setBusinesses ] = useState([])

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/business')
        .then((response) => {
            console.log(response)
            const typeSorted = response.data.sort((a,b) => {
                if(a === b){
                    return 0
                }
                else{
                    return a.name < b.name? -1 : 1
                }
            })
            setBusinesses(typeSorted)
        })
        .catch((error) => {
            console.log(error)
        })
}, [])

    // const sortedBusinesses = [...businesses].sort((a, b) => {
    //     if (sortDirection === 'Oldest to latest') {
    //         return new Date(a.createdAt) - new Date(b.createdAt);
    //     } else if (sortDirection === 'Latest to oldest') {
    //         return new Date(b.createdAt) - new Date(a.createdAt);
    //     }
    //     return 0;
    // });

	return (
	<div className='body-div'>

<div className='nav-bar'>
				<div className='nav-bar-component'>
					<h1>yiip</h1>
					{/*Add map route later*/}
					<Link href="#">Map</Link>
					{/*Didn't quite understand this part, ask for elaboration later.*/}
					<Link href="#">I'm feeling lucky</Link>
				</div>

				<div className='nav-bar-component'>
					{/*Not totally sure what this button does yet?*/}
					<Link href="#">About</Link>
					{/*Made this into one button, since our login/register page is all in one.*/}
					<Link href="/welcome" className='sign-up-btn'>Sign up/Login</Link>
				</div>
			</div>

            <div className='restaurant-carousel'>
                    {
                businesses.sort().map((value, index) => (
				<div className='restaurant'>
                    <div key = {index}>
                        <Link href={`/business/${value._id}`}>{`See More >>>`}</Link>

                        <p>{value.industry}</p>
                        <p>{value.service}</p>
                        <p>{value.hours}</p>
                        
                </div>
                        <Image
                        src={'/yiip-logo.png'}
                        height={125}
                        width={175}
                        alt='Placeholder Restaurant Image'
						/>

				</div>
                        ))
                    }

			</div>



    </div>


	)
}

export default LandingPage;