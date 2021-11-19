import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../Hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const {user} = useAuth()
    const [orders, setOrders] =useState([])
    useEffect( ()=>{
        fetch('https://protected-sands-12497.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>your orders</h1>
           <div class="row row-cols-1 row-cols-md-4 g-4">
           {
              orders.filter(s => user.email === s.email).map(order => <Order
              key={order._id}
              order={order}
              orders ={orders}
              setOrders ={setOrders}
              ></Order>,
              )
            }
           </div>
        </div>
    );
};

export default MyOrders;