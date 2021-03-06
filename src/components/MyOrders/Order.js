import React from 'react';


const Order = ({myOrder,myOrders, setOrders}) => {
    console.log(myOrder?.email)
    const {email,_id,name,phone} = myOrder;


    const cancelOrder = id =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://protected-sands-12497.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }

    }

    return (
        
        
            <div>
            <div className="col">
    <div className="card h-100">
      <div className="card-body">
      <h5 class="card-title">Order_id: {_id}</h5>
      <p class="card-text">Name: {name}</p>
      <p class="card-text">Phone: {phone}</p>
      <p class="card-text">Email: {email}</p>
        
        <button className="btn btn-primary" onClick={ ()=> cancelOrder(myOrder._id)}>Cancel</button>
        
      </div>
    </div>
  </div>
                           
        </div>
    );
};

export default Order;


// {/* <h5 class="card-title">Order_id: {order?._id}</h5>
//                 <p class="card-text">Name: {order?.name}</p>
//                 <p class="card-text">Phone: {order?.phone}</p>
//                 <p class="card-text">Email: {order?.email}</p>
//                 <button href="#" class="btn btn-primary">Cancel Order</button> */}
