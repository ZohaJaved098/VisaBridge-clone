import React from 'react'
import './Visual.css'
const Visual = () => {
  return (
    <div className='visual'>
      <div className="pics">
        <div className="cart">
          <img src='/assets/animal-cart.svg' alt="..." />
        </div>
        <div className="boat">
          <img src='/assets/boat.svg' alt="..."  />
        </div>
        <div className="plane">
          <img src='/assets/aeroplane.svg' alt="..."  />
        </div>
      </div>
    </div>
  )
}

export default Visual
