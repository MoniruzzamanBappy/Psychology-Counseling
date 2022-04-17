import React, { useEffect, useState } from "react";
import Treatment from "../Treatment/Treatment";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [treat, setTreat] = useState([]);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("./treat.json")
      .then((res) => res.json())
      .then((data) => setTreat(data));
  }, []);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleSeeMore = ()=> {
    navigate('/Services')
  }
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-center container">We Provide</h1>
      <div className="container treat-cont my-4">
        {treat.map((t) => (
          <Treatment key={t.id} treat={t}></Treatment>
        ))}
      </div>
      <div>
        <h1 className="text-center">Services</h1>
        <div className="container service-cont my-4">
          {services.slice(0, 3).map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
          <button onClick={handleSeeMore}>See more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
