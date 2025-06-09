import express from "express";
import { createProduct, getProducts } from "../controller/productController.js"; // createProduct, getProducts
import { get } from "mongoose";
const router = express.Router();

//CRUD operations
// Create, Read, Update, Delete


// create a product
router.post("/", createProduct);

// get all products
router.get("/", getProducts);

// get product by id
router.get("/:id", (req, res) => {
    res.json({
        message: "Product fetched successfully",
        product: {
            id: req.params.id,
            name: "Product 1"
        }
    })
})

// update a product
router.put("/:id", (req, res) => {
    res.json({
        message: "Product updated successfully",
        product: {
            id: req.params.id,
            name: "Product 1"
        }
    })
})

// delete a product
router.delete("/:id", (req, res) => {
    res.json({
        message: "Product deleted successfully",
        product: {
            id: req.params.id,
            name: "Product 1"
        }
    })
})

export default router;
