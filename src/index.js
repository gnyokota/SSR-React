const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/component/Home").default;

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, () => {
  console.log(`server listening in port:${PORT}`);
});
