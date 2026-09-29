import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import listingRoutes from "./src/routes/listingRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(
    cors({
        origin: process.env.CORS_URL
    })
);

app.use(express.json());

app.use(
    "/api",
    listingRoutes
);

app.get("/", (req, res) => {

    res.json({
        status: true,
        message: "Airbnb Clone API is running"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `SERVER RUNNING ON PORT ${PORT}`
    );

});