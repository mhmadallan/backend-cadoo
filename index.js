// OT3u35RFLpYfc2uB
// 
// index.js
const express = require("express");
const cors = require("cors");
const db = require("./db");
const productRoutes = require("./routes/products");

const app = express();
app.use(cors()); // Enable CORS for frontend access
app.use(express.json()); // Parse JSON data

// Routes
app.use("/api/products", productRoutes);

// Start server
app.listen(5000, () => console.log("Backend running on port 5000"));
