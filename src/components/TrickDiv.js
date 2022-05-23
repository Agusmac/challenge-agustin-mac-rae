import React, { useState } from 'react'

const TrickDiv = () => {

  const [openModal, setopenModal] = useState(false)

  return (
    <div className="trick grid">
      <div className={`modal grid ${openModal ? 'open' : ''}`}>
        <div>
          <h2 className='spacerBot'>Sign in</h2>
          <p className='spacerBot'>From boutique shops to baseball games, all-day eateries to stunning sunsets, there are hundreds of ways to brighten your days.</p>
          <h3 onClick={() => setopenModal(!openModal)}>CLOSE</h3>
        </div>
      </div>
      <div className='bg-wine'></div>
      <div className='flex trickText'>
        <div className='detailfixer'>
          <h2 className='spacerBot'>Imagine More Fun Times</h2>
          <p className='spacerBot'>From boutique shops to baseball games, all-day eateries to stunning sunsets, there are hundreds of ways to brighten your days.</p>
          <div className='button' onClick={() => setopenModal(!openModal)}>SHOP & DINE HERE</div>
        </div>
      </div>
    </div>
  )
}

export default TrickDiv