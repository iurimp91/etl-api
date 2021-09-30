import "./setup";
import express from "express";
import cors from "cors";

import * as numbersController from "./controllers/numbersController";
import startApplication from "./utils/startApplication";

const app = express();
app.use(cors());

startApplication();

app.get("/numbers", numbersController.getNumbers);

export { app };