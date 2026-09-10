# Payment Service

Payment processing microservice.

## Responsibilities

- Create payments
- Retrieve payments
- Track payment status

## Port

3003

## API

GET /health

GET /payments

GET /payments/:id

POST /payments

## Create Payment

POST /payments

Example:

{
  "orderId": 1,
  "amount": 999.99,
  "currency": "CAD"
}

## Run

npm install

npm start

## Test

npm test

## Docker

docker build -t payment-service .

docker run -p 3003:3003 payment-service

## Repository

https://github.com/piyushgarg949-commits/payment-service
