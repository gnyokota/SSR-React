import React from 'react'

import HelmetTags from './HelmetTags.jsx'

import './Home.css'

const Home = () => {
  return (
    <div>
      <HelmetTags title="SSR home" />
      <h1 className="home-title">Hello, from Home</h1>
      <button onClick={() => console.log('Pressed')}>Press me!</button>
    </div>
  )
}

export default Home
