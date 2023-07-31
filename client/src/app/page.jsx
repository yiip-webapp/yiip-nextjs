'use client'

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

function LandingPage(props) {
  const { businesses } = props;
  const [ sortDirection , setSortDirection ] = useState('Oldest to latest');

    const sortBusinesses = (direction) => {
        setSortDirection(direction);
    };

    const sortedBusinesses = [...businesses].sort((a, b) => {
        if (sortDirection === 'Oldest to latest') {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortDirection === 'Latest to oldest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
    });


	return (
		<div className='container'>
      <div className='card'>
        <div className='buttons'>
          <button className="bg-sky-300 rounded-md p-2 mr-3 mb-3 hover:bg-sky-500" onClick={() => sortTexts('Oldest to latest')}>
            Sort Oldest to Newest
          </button>
          <button className='bg-sky-300 rounded-md p-2 mb-3 hover:bg-sky-500' onClick={() => sortTexts('Latest to oldest')}>
            Sort Newest to Oldest
          </button>
        </div>
        <p className='text-violet-500 underline decoration-dotted pb-3'>Sort Direction: { sortDirection }</p>
        {
          sortedBusinesses.map((business, index) => {
            return (
              <div key={index}>
                
              </div>
            )
          })
        }
      </div>
    </div>
	)
}

export default LandingPage;