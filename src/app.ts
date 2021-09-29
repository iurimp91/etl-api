import "./setup";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const data: number[] = [];
let count = 1;

extractNumbers();

async function extractNumbers() {
    let incomingData: number[] = [];

    while(incomingData) {
        try {
            const request = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${count}`);
    
            incomingData = request.data.numbers;

            if(incomingData.length) {
                data.push(...incomingData);
                count++;
                transformNumbers(data);
            } else {
                transformNumbers(data);
                break;
            }
        } catch (e) {
            console.log(`Request of page ${count} failed. Trying again.`);
        }
    }
}

function transformNumbers(data: number[]) {
    for(let i = 0; i < data.length; i++) {
        let j = i;
        while(data[j] > data[j+1]) {
            let temp = data[j+1];
            data[j+1] = data[j];
            data[j] = temp;
            j++;
        }
        j = i;
        while(data[j] < data[j-1]) {
            let temp = data[j-1];
            data[j-1] = data[j];
            data[j] = temp;
            j--;
        }
    }
}

app.get("/numbers", (req, res) => {
    extractNumbers();
    res.send(data);
});

export default app;