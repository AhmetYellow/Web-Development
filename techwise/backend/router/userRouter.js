import express from "express";


const router = express.Router();

// CRUD operations

// Create, Read, Update, Delete

// get all users
router.get("/", (req, res) => {
    res.json({
        message: "Users fetched successfully",
        users: [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            }
        ]
    })
});


router.get("/:id", (req, res) => {
    res.json({
        message: "User fetched successfully",
        product: {
            id: req.params.id,
            name: "User 1",
        }
    })
});

// create a user
router.post("/", (req, res) => {
    res.json({
        message: "User created successfully",
        user: {
            id: 1,
            name: "User 1"
        }
    })
});

router.put("/:id", (req, res) => {
    res.json({
        message: "User updated successfully",
        user: {
            id: req.params.id,
            name: "User 1"
        }
    })
});

router.delete("/:id", (req, res) => {
    res.json({
        message: "User deleted successfully",
        user: {
            id: req.params.id,
            name: "User 1"
        }
    })
});


export default router;