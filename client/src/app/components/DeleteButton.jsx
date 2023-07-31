'use client';

import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { businessId, successCallback } = props;

    const deleteBusiness = (e) => {
        axios.delete(`http://localhost:8000/api/business/${businessId}`)
            .then(res => {
                console.log("Deleting...");
                successCallback();
            })
    }

    return (
        <button onClick={ deleteBusiness } className='btn btn-danger'>
            Delete
        </button>
    )
}

export default DeleteButton;