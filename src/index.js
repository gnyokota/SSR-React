import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import Home from "./client/component/Home.jsx";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, () => {
  console.log(`server listening in port:${PORT}`);
});
