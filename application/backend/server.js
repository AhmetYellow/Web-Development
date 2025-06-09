import express from 'express'
import productRouter from './router/productRouter.js'
import mongoose from 'mongoose'
import cors from 'cors'

const MONGO_URI = "mongodb://localhost:27017/ecommerce";

const app = express()

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

async function main() {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to MongoDB");
        process.exit(1); // exit with failure from node.
    }
}

app.listen(3000, () => {
  console.log(`Server is running on port http://127.0.0.1:${3000}!`);
});

main();