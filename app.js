import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const data = [];
let count = 1;

extractNumbers();

async function extractNumbers() {
    let incomingData = true;

    while(incomingData) {
        try {
            const request = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${count}`);
    
            incomingData = request.data.numbers;

            if(incomingData) {
                data.push(...incomingData);
                count++;
            } else {
                transformNumbers(data);
                break;
            }
        } catch (e) {
            console.log(e.message);
        }
    }
}

function transformNumbers(data) {
    for(let i = 0; i < data.length-1; i++) {
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

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(4000);