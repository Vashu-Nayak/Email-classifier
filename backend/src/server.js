const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { geminiController } = require("./controller/geminiController");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors());

// Routes
app.post('/classify', geminiController);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port :${PORT}`);
});