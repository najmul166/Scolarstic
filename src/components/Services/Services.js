import React, { useEffect, useState } from 'react';
import  './service.css';

const Services = () => {
    const [food,setFood] =useState([]);
    const[cart,setCart] = useState([]);

    useEffect (() => {
      fetch('./service.json')
      .then(res => res.json())
      .then(data => setFood(data));
    },[]);

    const handleAddToCart =(foodi) => {
        const newCart = [ ...cart ,foodi];
        setCart(newCart)
    }
    let total = 0;
    let surename=[];
    let image =[];
    let subtotal =0;

    for(const foodi of cart){
        total = total + foodi.paid;
        surename =surename+foodi.name;

        
     }


    return (
        <div>
            <div className="full">
            <div className="fooder-container">
            {
                food.map(foodi => <Foodie key ={foodi.id} foodi={foodi} handleAddToCart={handleAddToCart}></Foodie>)
            }
            </div>
            <div className="cart-container">
                <h3>Order List</h3>
                <h4>Item Order:{cart.length}</h4>
                <h4>Total = {total}</h4>
                <div>
                {surename}

                </div>

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
        <h2>Name:{name}</h2>
        <h3>Lecture:{lecture}</h3>
        <h3>Language:{language}</h3>
        <h3>Requirement:{requirement}</h3>
        <h3>Project:{project}</h3>
        <h3>Paid:{paid}</h3>
        <button onClick={() => props.handleAddToCart(props.foodi)} className="btn-regular"> Enroll</button>
  
      </div>
    )
  }

export default Services;