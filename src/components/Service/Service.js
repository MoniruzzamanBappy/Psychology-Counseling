import React from 'react';
import Services from './../Services/Services';
import useServices from './../../hooks/useServices';

const Service = () => {
    
  const [services, setServices] = useServices();

    // useEffect(() => {
    //     fetch("./data.json")
    //       .then((res) => res.json())
    //       .then((data) => setServices(data));
    //   }, []);
    return (
        <div className="container service-cont my-4">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
    );
};

export default Service;