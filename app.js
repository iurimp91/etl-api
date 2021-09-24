import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const data = [];

const request = axios.get("http://challenge.dienekes.com.br/api/numbers?page=1");

request.then(response => {
    data.push(response.data);
});

request.catch(error => {
    console.log("Something went wrong.");
});

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(4000);