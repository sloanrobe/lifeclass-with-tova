import React from 'react'
import MyButton from './MyButton'

function CompanyTagline() {
  return (
    <div className='tagline-container'>
      <div className="logo-container">
        <img className='logo' src="./images/LifeClass-with-Tova-Logo.png" alt="LifeClass with Tova logo"></img>
      </div>
      <div className='tagline-content'>
        <div className="tagline">
          <h2>Rediscover Your Power</h2>
          <h2>Transform Your Life</h2>
        </div>
        <div>
          <MyButton />
        </div>
      </div>    
    </div> 
  )
}

export default CompanyTagline