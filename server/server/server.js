// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const PORT =  5000; // Use the PORT from environment variables, default to 5000 if not set

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// Routes
const userRouter = require('./routes/userrouter');
const serviceRouter = require('./routes/sevicerouter');
const itemRouter = require('./routes/itemrouter');
const orderrouter = require('./routes/orderrouter');

app.use(userRouter);
app.use(serviceRouter);
app.use(itemRouter);
app.use(orderrouter);

// MongoDB connection
const dbURI = "mongodb+srv://ahmedabughoshh:123@cluster0.leatrkm.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB`);
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error in connecting to MongoDB:', error);
    process.exit(1); // Exit the application on MongoDB connection error
  });
