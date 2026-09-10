const express = require("express");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "payment-service",
    status: "UP"
  });
});

app.use("/payments", paymentRoutes);

module.exports = app;

