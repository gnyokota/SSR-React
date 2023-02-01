import express from "express";

import renderer from "./helper/renderer";

const app = express();

//sets a static folder where server can find the client.bundle.js
app.use(express.static("public"));
const PORT = 8080;

app.get("*", (req, res) => {
  const html = renderer(req);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`server listening in port:${PORT}`);
});
