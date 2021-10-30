import React, { useState } from 'react';
import { useEffect } from 'react';
import AllOrder from './AllOrder';


const ManageAllOrder = () => {
    const [orders, setOrders] =useState([])
    useEffect( ()=>{
        fetch('https://protected-sands-12497.herokuapp.com/orders')
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