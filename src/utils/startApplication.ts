import { extractNumbers } from "./extractNumbers";

const testEnvironment = process.env.NODE_ENV === "test" ? true : false;

export default async function startApplication() {
    const request = await extractNumbers();

    if(testEnvironment) return;

    if(request.length) {
        startApplication();
    }
}