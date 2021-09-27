import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const data = [];
let count = 1;

getNumbersList();

async function getNumbersList() {
    let incomingData = true;

    while(incomingData) {
        try {
            const request = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${count}`);
    
            incomingData = request.data.numbers;

            if(incomingData) data.push(...incomingData)
            
            count++;
        } catch (e) {
            console.log(e.message);
        }
    }
}

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(4000);