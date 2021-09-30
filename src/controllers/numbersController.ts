import { Request, Response } from "express";

import { numbers } from "../utils/extractNumbers";

export async function getNumbers(req: Request, res: Response): Promise<Response<number[]>> {
    const sortedNumbers = numbers;

    return res.send(sortedNumbers);
}