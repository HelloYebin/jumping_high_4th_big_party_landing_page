const express = require("express");
const app = express();
const PORT = 8001;
app.set("client", __dirname + "/client");
app.set("view engine", "js");
app.get("/", (req, res) => {
  res.sendFile("./build/index.html");
});
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
