# ETL API

## About

An ETL application that connects with an external API, that returns a number list, and provides a route with these numbers sorted. Routes:

- GET /numbers - Returns a sorted array with the numbers extracted from the external API until the moment. The external API has a great amount of data, so it can take a while until all the data is extracted.

### How to use

Use your favorite API platform and send a GET request to https://challenge-etl.herokuapp.com/numbers

### Next Steps

Features and improvements that can be implemented:

- Improve algoritm performance.

## Technologies

The following tools and frameworks were used in the construction of the project:

- Node.js
- Express
- Cors
- Axios
- Jest (tests)
- Supertest (tests)

## How to run

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Rename the .env.example file to .env and insert a port into the available variable.

4. Run the application with
```bash
npm start
```
5. Use your favorite API platform to send the requests.
