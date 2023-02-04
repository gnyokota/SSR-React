import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import RoutesComp from './RoutesComp.jsx'
import store from '../helper/store'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutesComp />
    </BrowserRouter>
  </Provider>,
)
