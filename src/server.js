import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import Home from "./client/component/Home.jsx";

const app = express();

//sets a static folder where server can find the client.bundle.js
app.use(express.static("public"));
const PORT = 8080;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
  <html>
  <head>
  <link rel="stylesheet" href="styles.css">
  </head>
  <body>
  <div id="app">${content}</div>
  <script src="client.bundle.js"></script>
  </body>
  </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`server listening in port:${PORT}`);
});
