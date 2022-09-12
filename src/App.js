import React, { useState } from "react";
import axios from 'axios'


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a7648d982dc556322e3091d7cb48119&units=metric`

   const searchLocation=(event)=>{
   if(event.key==="Enter"){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
   }
   }
  return (
    <div className="app">
      <div className="search">
      <input
       value={location}
       type="text" 
       placeholder="Enter your location"
       onChange={e=>setLocation(e.target.value)}
       onKeyPress={searchLocation}
       />
      </div>
<div className="container">
  <div className="top">
    <div className="location">
      <p>Dallas</p>
    </div>
    <div className="temp">
      <h1>60 F</h1>
    </div>
    <div className="description">
      <p>
        Clouds
      </p>
    </div>
  </div>
  <div className="bottom">
    <div className="feels">
      <p className="bold">65F</p>
      <p>Feels Like</p>
    </div>
    <div className="humidty">
      <p className="bold">20F</p>
      <p>Humidty</p>
    </div>
    <div className="wind">
      
      <p className="bold">12mph</p>
      <p>Wind Speed</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
