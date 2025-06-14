import express from "express";
import userRouter from "./router/userRouter.js";
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/ecommerce";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

// Root route (optional)
app.get("/", (req, res) => {
    res.send("Welcome to the Mentor Tracker API!");
});

app.listen(3000, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}!`);
})