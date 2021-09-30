import transformNumbers from "./transformNumbers";
import * as numbersRepository from "../repositories/numbersRepository";

let count = 1;
const numbers: number[] = [];

async function extractNumbers() {
    try {
        while(true) {
            const incomingNumbers = await numbersRepository.getNumbersByPageId(count);

            if(incomingNumbers.length) {
                numbers.push(...incomingNumbers);
                count++;
                return transformNumbers(numbers);
            } else {
                break;
            }
        }
    } catch(e) {
        console.log("Request failed. Trying again.");
        extractNumbers();
        return [1];
    }
    
}

export { numbers, extractNumbers };