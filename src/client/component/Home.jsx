import React from 'react'

import './Home.css'

const Home = () => {
  return (
    <div>
      <h1 className="home-title">Hello,from Home </h1>
      <button onClick={() => console.log('Pressed')}>Press me!</button>
    </div>
  )
}

export default Home
