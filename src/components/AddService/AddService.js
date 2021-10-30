import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
   axios.post('https://protected-sands-12497.herokuapp.com/tickets',data)
   .then(res =>{
       console.log(res)
       reset()
   })
  };
    return (
        <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <br />
      <input {...register("resturent")} placeholder="Resturent Name" />
      <br />
      <input type="number" {...register("Price")} placeholder="Price" />
      <br />
      <input  {...register("img")} placeholder="img url" />
      <br />
      <textarea {...register("description")} placeholder="description" />
      <br />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;