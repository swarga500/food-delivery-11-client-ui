import React, { useState } from 'react';
import { useEffect } from 'react';
import AllOrder from './AllOrder';


const ManageAllOrder = () => {
    const [orders, setOrders] =useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>manage all order</h1>
            {
                orders.map(order => <AllOrder
                key={order._id}
                order={order}
                ></AllOrder>)
            }
        </div>
    );
};

export default ManageAllOrder;