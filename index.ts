import express from "express";
import { setupServer } from "./config";

const app = setupServer(express());

app.listen(3000);
