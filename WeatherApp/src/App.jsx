import { useState } from 'react'
import './App.css'

function App() {
  const currentDate = new Date();
  const months =[
    'January',
    "february",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day} ,${year}`;

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='container_date'>{formattedDate}</h1>
        <div className="weather_data">
          <h2 className='container_city'>Delhi</h2>
          <img src="/thunder.png" className='container_img' width="180px" alt='thunder'/> */
          <h2 className='container_degree'>34.22</h2>
          <h2 className="country_per">Sunny</h2>
          <form className='form'>
              <input type="text" placeholder='Enter City Name' className='input' />
              <button type='sumbit'>Get</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
