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

            <div className="mart-container">
            <div className="half-width">
                  <h1 color="red"> Build Up Career With  Technology</h1>
                  <a class="anchor-button" target="_blank" href="">Watch Live</a>
        </div>
        <div className="half-width">
           <img src="https://www.wikihow.com/images/1/1b/Balance-Work-and-Caregiving-Step-9-Version-2.jpg" alt="" height="400px" width="400px"></img>

        </div>
            
            

                </div>





            <div className="fooder-container">
            {
                food.map(foodi => <Foodie key ={foodi.id} foodi={foodi} handleAddToCart={handleAddToCart}></Foodie>)
            }
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
