import { users } from "../data/users.js";

let success = true;

export const checkAuth = (req, res, next) => {
    if (success) {
        console.log("Auth Checked");
        next();
    } else {
        console.log("Auth failed");
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        });
    }
};

// Validate user ID
export const validateUserId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "User ID is required"
        });
    }

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    req.user = user;
    next();
};

// Validate name and email (OPTIONAL)
export const validateNameEmail = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and Email are required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
    }

    next();
};
