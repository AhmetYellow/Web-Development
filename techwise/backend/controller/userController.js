import User from "../model/userModel.js";


export const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({
        name,
        email,
        password,
        role
    });
    await user.save();
    res.json({
        message: "User created successfully",
        user
    });
}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        message: "Users fetched successfully",
        users
    })
}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        message: "User fetched successfully",
        user
    })
}

export const updateUser = async (req, res) => {
    res.json({
        message: "User updated successfully",
        user: {
            id: req.params.id,
            name: "User 1"
        }
    })
}

export const deleteUser = async (req, res) => {
    res.json({
        message: "User deleted successfully",
        user: {
            id: req.params.id,
            name: "User 1"
        }
    })
}