import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserList from './component/UserList.jsx'
import Home from './component/Home.jsx'

const RoutesComp = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users" element={<UserList />} />
    </Routes>
  )
}

export default RoutesComp
