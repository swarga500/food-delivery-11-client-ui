import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/tickets')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div id="services">
            <br />
            <br />
            <h1 className="text-warning mx-auto">Our Services</h1>
            <div id="services" className="row row-cols-1 row-cols-md-3 g-4">
           {
               services.map(service => <Service
               key={service._id}
               service={service}
               ></Service>)
           }
        </div>
        </div>
        </div>
    );
};

export default Services;