import React, { Component, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
 

function App() { 
  
  const[data , setData]= useState({})
   const [location ,setLocation] = useState ("")
 

 const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=16030b2e9933bdf1d35ddf301b9c39b5`

  
  
   const search=(event)=>{
    if (event.key === 'Enter'){
    axios.get(url)
    .then((response)=>{
       setData(response.data)
    
       console.log(response.data)
     
     
      })
      setLocation('')
     
 
       } 



     
   }
 
 return (
    <div className="App">
      <div className='search'>

   <input value={location} type='name' onKeyPress={search}
    placeholder="Enter Location"
     onChange={event=>setLocation(event.target.value)}/>

</div>
    <div className="container">

      <div className="header">
        <div className='STATE'>
        <h3>{data.name}</h3>
         <br />
         <br />
         <br />
         <br />
     
        </div>
        <div className='temprature'>
        {data.main ?<h1>{data.main.temp}°</h1>:null}
        </div>
        <div className="discription">
           <p>Clouds</p>
        </div>
        <div className="footer">
        <div className="feels">
          <p>FEELS LIKE</p>
          {data.main ?<p>{data.main.feels_like}  65°F</p>:null}
          <hr className='hr'/>
          </div>
        <div className="humidity">
        <p>HUMIDITY </p>
         {data.main ?<p>{data.main.humidity}%</p>:null}
         <hr className='hr'/>
          </div>
          <div className="wind">
            <p>WIND </p>
            {data.wind ? <p>{data.wind.speed} MPH</p> :null} 
            <hr className='hr'/>
        </div>
    </div>
</div>
      </div>
</div>


  );
}

export default App;
