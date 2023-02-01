import React from "react";
import * as ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";

import RoutesComp from "../client/RoutesComp.jsx";

const renderer = (req) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.path} context={{}}>
      <RoutesComp />
    </StaticRouter>
  );

  const html = `
  <html>
  <head>
  <link rel="stylesheet" href="styles.bundle.css">
  </head>
  <body>
  <div id="app">${content}</div>
  <script src="client.bundle.js"></script>
  </body>
  </html>
  `;
  return html;
};

export default renderer;
