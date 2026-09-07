require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
    res.send("Afragate Global Backend is running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});