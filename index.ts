import express from "express";

const app = express();

app.get("/", function (_, res) {
  res.send("Hello World");
});

app.listen(3000);
