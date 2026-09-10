const payments = require("../models/paymentModel");

const getPayments = (req, res) => {
  res.json(payments);
};

const createPayment = (req, res) => {
  const { orderId, amount, method } = req.body;

  if (!orderId || !amount || !method) {
    return res.status(400).json({
      message: "orderId, amount and method are required"
    });
  }

  const payment = {
    id: payments.length + 1,
    orderId,
    amount,
    method,
    status: "SUCCESS"
  };

  payments.push(payment);

  res.status(201).json(payment);
};

module.exports = {
  getPayments,
  createPayment
};
