import React from 'react'
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="InfoHead">
            <h4>Your Info</h4>
            <div> <UilPen width='2rem' height='1.2rem' /></div>
        </div>
        <div className="info">
            <span><b>Status </b></span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span><b>Lives in </b></span>
            <span>Banda</span>
        </div>
        <div className="info">
            <span><b>Woks at </b></span>
            <span>RPG pvt Ltd</span>
        </div>
        <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard