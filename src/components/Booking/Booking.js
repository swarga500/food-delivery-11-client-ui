
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth'

const Booking = () => {
    const {user} = useAuth();
    const [booking, setBooking] = useState({})
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...booking};
        newData[field] = value;
        setBooking(newData)
    }

    const handleBooking = e =>{
        fetch('https://protected-sands-12497.herokuapp.com/orders', {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify(booking)
   })
   alert('booking success')
   e.target.value('')
   
   e.preventDefault()
   }


    return (
        <div>
            <h1> Booking</h1>
            <form onSubmit={handleBooking} className="w-50 mx-auto mt-3">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" name="name" defaultValue={user.displayName} placeholder="your name" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" name="email" defaultValue={user.email} placeholder="email" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">phone</label>
                    <div className="col-sm-10">
                    <input type="number" name="phone" placeholder="phone number" onBlur={handleOnBlur} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                    <input type="text" name="address" placeholder="Address" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">quantity </label>
                    <div className="col-sm-10">
                    <input type="text" name="quantity" placeholder="quantity" onBlur={handleOnBlur} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Book</button>
                
            </form>
        </div>
    );
};

export default Booking;


