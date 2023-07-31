'use client';

import React, { useState } from 'react';
import CancelButton from './CancelButton';

const BusinessForm = (props) => {
    const { initialIndustry, initialName, initialAddress, initialPhone, initialHours, initialService, onSubmitProp, errors } = props
    const [ industry, setIndustry ] = useState(initialIndustry);
    const [ name, setName ] = useState(initialName);
    const [ address, setAddress ] = useState(initialAddress);
    const [ phone, setPhone ] = useState(initialPhone);
    const [ hours, setHours ] = useState(initialHours);
    const [ service, setService ] = useState(initialService);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ industry, name, address, phone, hours, service });
    }

    return (
        <div className='container'>
            <div className='form-control'>
                <form onSubmit ={ onSubmitHandler }>
                    <div>
                        <label> Industry </label><br />
                        <div className='col-sm-3 mt-3'>
                            <input type="text" className={`form-control ${errors.industry && 'is-invalid'}`} name='industry' value={industry} placeholder="i.e. Restaurant" onChange = {(e) => setIndustry(e.target.value)}/>
                            { errors.industry &&
                                <p className='text-danger'>{ errors.industry.message }</p>
                            }
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <label> Name </label><br />
                            <input type='text' className={`form-control ${errors.name && 'is-invalid'}`} name='name' value={name} placeholder="Wingstop" onChange = {(e) => setName(e.target.value)}/>
                            { errors.name &&
                                <p className='text-danger'>{ errors.name.message }</p>
                            }
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <label> Address </label><br />
                            <input type='text' className={`form-control ${errors.address && 'is-invalid'}`} name='address' value={address} placeholder="123 City Dr Orange, CA" onChange = {(e) => setAddress(e.target.value)}/>
                            { errors.address &&
                                <p className='text-danger'>{ errors.address.message }</p>
                            }
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <label> Phone </label><br />
                            <input type='text' className={`form-control ${errors.phone && 'is-invalid'}`} name='phone' value={phone} placeholder="657-456-0897" onChange = {(e) => setPhone(e.target.value)}/>
                            { errors.phone &&
                                <p className='text-danger'>{ errors.phone.message }</p>
                            }
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <label> Hours </label><br />
                            <input type='text' className={`form-control ${errors.hours && 'is-invalid'}`} name='hours' value={hours} placeholder="10 AM - 12 AM" onChange = {(e) => setHours(e.target.value)}/>
                            { errors.name &&
                                <p className='text-danger'>{ errors.hours.message }</p>
                            }
                        </div>
                        <div className='col-sm-3 mt-3'>
                            <label> Service(s) </label><br />
                            <textarea className={`form-control ${errors.service && 'is-invalid'}`} name='service' value={service} placeholder="wings" onChange = {(e) => setService(e.target.value)}/>
                            { errors.service &&
                                <p className='text-danger'>{ errors.service.message }</p>
                            }
                        </div>
                    </div>
                    <div className='buttons'>
                        <input type="submit" className="btn btn-success buttons" value='Submit' />
                        <CancelButton />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BusinessForm;