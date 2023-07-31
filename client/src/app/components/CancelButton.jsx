'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CancelButton = (props) => {
    const navigate = useRouter();

    const clickedButton = () => {
        navigate.push('/');
    }

    return (
        <button onClick={ clickedButton } className='btn btn-outline-secondary'>
            Cancel
        </button>
    )
}

export default CancelButton;