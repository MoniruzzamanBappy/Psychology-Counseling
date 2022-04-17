import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Services from './../Services/Services';

const Service = () => {
    
  const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
    return (
        <div className="container service-cont my-4">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
    );
};

export default Service;