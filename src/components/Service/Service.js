import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,_id, description, img,Price,resturent} = service;
    return (
        <div class="col col-md-3 col-sm-12">
          <div className="card h-100">
          <img src={img} className="card-img-top img-fluid p-2" height="250px" alt="" />
         <div className="card-body">
        <h4 className="card-title">Name: {name}</h4>
        <h5>Resturent: {resturent}</h5>
        <h5>Price: {Price}</h5>
        <h5 class="card-text">Details: {description}</h5>
        <Link className="btn btn-warning" to="/booking">Book Now</Link>
      </div>
    </div>
  </div>
    );
};

export default Service;