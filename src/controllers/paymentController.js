const payments = require("../models/paymentModel");

const getPayments = (req, res) => {
  res.json(payments);
};

const getPaymentById = (req, res) => {
  const id = Number(req.params.id);

  const payment = payments.find(
    payment => payment.id === id
  );

  if (!payment) {
    return res.status(404).json({
      message: "Payment not found"
    });
  }

  res.json(payment);
};

const createPayment = (req, res) => {
  const {
    orderId,
    amount,
    currency
  } = req.body;

  if (!orderId || !amount || !currency) {
    return res.status(400).json({
      message:
        "orderId, amount and currency are required"
    });
  }

  const payment = {
    id: payments.length + 1,
    orderId,
    amount,
    currency,
    status: "SUCCESS"
  };

  payments.push(payment);

  res.status(201).json(payment);
};

module.exports = {
  getPayments,
  getPaymentById,
  createPayment
};
