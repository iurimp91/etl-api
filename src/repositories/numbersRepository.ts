import axios from "axios";

export async function getNumbersByPageId(pageId: number) {
    const request = await axios.get(`http://challenge.dienekes.com.br/api/numbers?page=${pageId}`); 

    const numbers: number[] = request.data.numbers;

    return numbers;
}