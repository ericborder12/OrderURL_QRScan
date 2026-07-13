require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Create application
const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Basic Test Route

app.get("/", (req, res) => {
    res.json({
        message: "QR Food Ordering System API is running",
        version: "1.0.0"
    });
});

// Import Routes

// These files will handle different modules
const restaurantRoutes = require("./routes/restaurants");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");
const qrRoutes = require("./routes/qr");

// API Routes

app.use("/api/restaurants", restaurantRoutes);

app.use("/api/menu", menuRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/qr", qrRoutes);


// Error Handling


app.use((req, res) => {
    res.status(404).json({
        message: "API endpoint not found"
    });
});


app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        message: "Internal server error"
    });

});


// Start Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
