import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import { Helmet } from 'react-helmet'

import RoutesComp from '../client/RoutesComp.jsx'

const renderer = (req, store) => {
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <RoutesComp />
      </StaticRouter>
    </Provider>,
  )

  const helmet = Helmet.renderStatic()

  const html = `
  <html>
  <head>
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  <link rel="stylesheet" href="styles.bundle.css">
  <link rel="icon" type="image/x-icon" href="favicon.png">
  </head>
  <body>
  <div id="app">${content}</div>
  <script src="client.bundle.js"></script>
  </body>
  </html>
  `
  return html
}

export default renderer
