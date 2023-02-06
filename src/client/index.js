import 'babel-polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import RoutesComp from './RoutesComp.jsx'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <RoutesComp />
  </BrowserRouter>,
)
