import express from "express";
import { setupServer } from "./config.js";

const app = setupServer(express());

app.listen(process.env["FLIX_SERVER_PORT"]!);
