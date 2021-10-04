import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import  './Home.css';

const Home = () => {
    const [food,setFood] =useState([]);
    const[cart,setCart] = useState([]);

    useEffect (() => {
      fetch('./home.json')
      .then(res => res.json())
      .then(data => setFood(data));
    },[]);

    const handleAddToCart =() => {
        <NavLink to="/services"></NavLink>



        
    }
    




    return (
        <div>
            <div className="full">
            <div className="fooder-container">
            {
                food.map(foodi => <Foodie key ={foodi.id} foodi={foodi} handleAddToCart={handleAddToCart}></Foodie>)
            }
            </div>
            <div className="mart-container">
            

                </div>

            </div>
            
        </div>
    );
};

const Foodie = (props) => {
    console.log(props)
    const {name,lecture,language,requirement,paid,project,img} = props.foodi;
    return(
      <div className="fooder">
        <img src= {img} alt=""/>
        <h3>Name:{name}</h3>
        <h4>Lecture:{lecture}</h4>
        <h4>Language:{language}</h4>
        <h4>Requirement:{requirement}</h4>
        <h4>Project:{project}</h4>
        <h4>Paid:{paid}</h4>
        <h4>40% Discount</h4>
        <h5>Go To Service</h5>
  
      </div>
      
    )
  }

export default Home;