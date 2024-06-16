import React from 'react'
import LoGo from '../../img/logo.png';
import './LogoSearch.css';



const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={LoGo} alt="" />
        <div className="Search">
            <input type="text" placeholder='#Explore' />
           
        </div>
    </div>
  )
}

export default LogoSearch