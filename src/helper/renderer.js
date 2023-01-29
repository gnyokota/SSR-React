import React from "react";
import {renderToString} from "react-dom/server";
import Home from "../client/component/Home.jsx";

const renderer = () => {
  const content = renderToString(<Home />);
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
