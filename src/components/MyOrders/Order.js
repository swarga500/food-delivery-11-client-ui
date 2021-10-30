import React from 'react';


const Order = ({order}) => {
    console.log(order?.email)
    // const {email,_id,address,phone} = order;
    return (
        <div>
            <div class="card w-25 mx-auto">
            <div class="card-body">
                <h5 class="card-title">Order_id: {order?._id}</h5>
                <p class="card-text">Name: {order?.name}</p>
                <p class="card-text">Phone: {order?.phone}</p>
                <p class="card-text">Email: {order?.email}</p>
                <button href="#" class="btn btn-primary">Cancel Order</button>
            </div>
            </div>
        </div>
    );
};

export default Order;