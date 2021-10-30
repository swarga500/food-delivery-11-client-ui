
import React from 'react';
import useAuth from '../../Hooks/useAuth'
import { useForm } from 'react-hook-form';

const Booking = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
        fetch('https://protected-sands-12497.herokuapp.com//orders',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        
        })
        .then(res => res.json())
        .then(result =>{
            
            console.log(result)
            
        })
        
    };
    return (
        <div>
            <h1>this is bookig</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="name" />
      <br />
      <input type="email" {...register("email")} defaultValue={user.email}  />
      <br />
      <input type="number" {...register("phone")} placeholder="phone number" />
      <br />

      <input {...register("address")} placeholder="address: city, road,block"  />
       <br />
      
      <input type="number" {...register("quantity", { min: 1, max: 15 })} placeholder="quantity" />
      
      <br />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Booking;